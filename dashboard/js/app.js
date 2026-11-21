// SmartVehicle: controlos, simulação e comunicação com o ESP32.
'use strict';
// API: enviamos comandos para /api/control e recebemos dados de /api/status.
const $ = id => document.getElementById(id);
const buttons = [...document.querySelectorAll('.control[data-key]')];
const pressed = new Set();
const heldPointers = new Map();
const state = { mode: 'demo', online: true, movement: 'stopped', speed_kmh: 0, distance_cm: 86, obstacle: false, blocked: false, lights: false, left: false, right: false, brake: false };
let lastSent = '', lastMovement = '', mustReleaseForward = false, heartbeatTimer = null, pollTimer = null, activeRequest = false, requestCounter = 0, failedPolls = 0, pointerStop = false;
const CONTROL_MS = 150, STATUS_MS = 250, OBSTACLE_LIMIT = 20;
// Identifica o movimento a mostrar no ecrã.
function classify(throttle, steering) {
    if (throttle === 0 && steering === 0)
        return 'stopped';
    if (throttle > 0)
        return steering < 0 ? 'forward-left' : steering > 0 ? 'forward-right' : 'forward';
    if (throttle < 0)
        return steering < 0 ? 'reverse-left' : steering > 0 ? 'reverse-right' : 'reverse';
    return steering < 0 ? 'left' : 'right';
}
// Junta as teclas pressionadas e trata comandos incompatíveis.
function command() {
    const f = pressed.has('w'), b = pressed.has('s'), l = pressed.has('a'), r = pressed.has('d');
    let throttle = (f && !b) ? 1 : (b && !f) ? -1 : 0, steering = (l && !r) ? -1 : (r && !l) ? 1 : 0;
    if (!state.online)
        return { throttle: 0, steering: 0 };
    if (state.blocked && throttle > 0)
        throttle = 0;
    if (mustReleaseForward && throttle > 0)
        throttle = 0;
    return { throttle, steering };
}
// Pára o controlo quando a janela perde o foco.
function resetControls() { pressed.clear(); heldPointers.clear(); pointerStop = false; mustReleaseForward = true; updateActiveButtons(); transmit({ throttle: 0, steering: 0 }, true); }
function updateActiveButtons() {
    for (const b of buttons)
        b.classList.toggle('active', pressed.has(b.dataset.key));
    $('stopBtn').classList.toggle('active', pointerStop);
}
function onDown(k) {
    if (k === ' ') {
        stopNow();
        return;
    }
    if (!'wasd'.includes(k) || !state.online)
        return;
    if (k === 'w' && !pressed.has('w') && !state.blocked)
        mustReleaseForward = false;
    pressed.add(k);
    updateActiveButtons();
    transmit(command(), true);
}
function onUp(k) {
    if (k === ' ') {
        pointerStop = false;
        updateActiveButtons();
        return;
    }
    if (!'wasd'.includes(k))
        return;
    if (k === 'w')
        mustReleaseForward = false;
    pressed.delete(k);
    updateActiveButtons();
    transmit(command(), true);
}
function stopNow() { pressed.clear(); heldPointers.clear(); pointerStop = true; mustReleaseForward = true; updateActiveButtons(); transmit({ throttle: 0, steering: 0 }, true); }
// Controlos pelo teclado.
document.addEventListener('keydown', e => {
    if (e.target.matches('select,input,textarea') || e.altKey || e.ctrlKey || e.metaKey)
        return;
    const k = e.key.toLowerCase();
    if ('wasd'.includes(k) || e.code === 'Space') {
        e.preventDefault();
        if (!e.repeat)
            onDown(e.code === 'Space' ? ' ' : k);
    }
});
document.addEventListener('keyup', e => {
    const k = e.key.toLowerCase();
    if ('wasd'.includes(k) || e.code === 'Space') {
        e.preventDefault();
        onUp(e.code === 'Space' ? ' ' : k);
    }
});
// Controlos com o rato ou toque.
buttons.forEach(b => {
    b.addEventListener('pointerdown', e => {
        e.preventDefault();
        if (!state.online)
            return;
        b.setPointerCapture(e.pointerId);
        heldPointers.set(e.pointerId, b.dataset.key);
        onDown(b.dataset.key);
    });
    const release = e => {
        const k = heldPointers.get(e.pointerId);
        if (k) {
            heldPointers.delete(e.pointerId);
            if (![...heldPointers.values()].includes(k))
                onUp(k);
        }
    };
    b.addEventListener('pointerup', release);
    b.addEventListener('pointercancel', release);
    b.addEventListener('lostpointercapture', release);
});
$('stopBtn').addEventListener('pointerdown', e => { e.preventDefault(); stopNow(); });
$('stopBtn').addEventListener('pointerup', () => { pointerStop = false; updateActiveButtons(); });
window.addEventListener('blur', resetControls);
document.addEventListener('visibilitychange', () => {
    if (document.hidden)
        resetControls();
});
// Dados usados apenas no modo de demonstração.
function simulate(c) {
    let throttle = c.throttle, steering = c.steering;
    if (state.blocked && throttle > 0)
        throttle = 0;
    state.movement = classify(throttle, steering);
    state.speed_kmh = throttle === 0 ? 0 : (steering === 0 ? 1.4 : .9);
    state.brake = throttle === 0;
    render();
}
// Envia comandos ao ESP32 ou ao simulador.
async function transmit(c, force = false) {
    if (!state.online)
        return;
    const encoded = JSON.stringify(c);
    if (!force && encoded === lastSent && state.mode === 'demo')
        return;
    lastSent = encoded;
    if (state.mode === 'demo') {
        simulate(c);
        return;
    }
    try {
        await fetch('/api/control', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: encoded, cache: 'no-store', signal: AbortSignal.timeout(850) });
    }
    catch (e) { /* polling determines connection state; firmware failsafe stops motors */ }
}
// Confirma se os valores recebidos fazem sentido.
function validStatus(data) {
    if (!data || typeof data !== 'object')
        return null;
    const movements = ['stopped', 'forward', 'reverse', 'left', 'right', 'forward-left', 'forward-right', 'reverse-left', 'reverse-right'];
    if (!movements.includes(data.movement) || typeof data.blocked !== 'boolean' || typeof data.obstacle !== 'boolean')
        return null;
    const distance = data.distance_cm === null ? null : Number(data.distance_cm), speed = data.speed_kmh === null ? null : Number(data.speed_kmh);
    if (distance !== null && (!Number.isFinite(distance) || distance < 0 || distance > 500))
        return null;
    if (speed !== null && (!Number.isFinite(speed) || speed < 0 || speed > 100))
        return null;
    return { movement: data.movement, speed_kmh: speed, distance_cm: distance, obstacle: data.obstacle, blocked: data.blocked, lights: data.lights === true, left: data.left === true, right: data.right === true, brake: data.brake === true };
}
// Consulta periodicamente o estado do ESP32.
async function poll() {
    if (state.mode !== 'esp32' || activeRequest)
        return;
    activeRequest = true;
    try {
        const response = await fetch('/api/status', { cache: 'no-store', signal: AbortSignal.timeout(500) });
        if (!response.ok)
            throw Error('HTTP ' + response.status);
        const next = validStatus(await response.json());
        if (!next)
            throw Error('Resposta inválida');
        failedPolls = 0;
        const wasBlocked = state.blocked, wasOnline = state.online;
        Object.assign(state, next);
        state.online = true;
        if ((!wasBlocked && state.blocked) || !wasOnline) {
            mustReleaseForward = true;
            pressed.delete('w');
            updateActiveButtons();
        }
        render();
    }
    catch (e) {
        failedPolls++;
        if (failedPolls >= 3) {
            state.online = false;
            state.movement = 'stopped';
            resetControls();
            render();
        }
    }
    finally {
        activeRequest = false;
    }
}
// Atualiza as informações e o carro no dashboard.
function render() {
    const isOffline = !state.online, obstacle = state.obstacle || state.blocked;
    const movement = isOffline ? 'offline' : state.movement;
    const names = { stopped: 'PARADO', forward: 'A AVANÇAR', reverse: 'A RECUAR', left: 'VIRAR ESQUERDA', right: 'VIRAR DIREITA', 'forward-left': 'AVANÇO À ESQUERDA', 'forward-right': 'AVANÇO À DIREITA', 'reverse-left': 'RECUO À ESQUERDA', 'reverse-right': 'RECUO À DIREITA', offline: 'DESLIGADO' };
    $('stage').classList.toggle('offline', isOffline);
    $('car').setAttribute('class', 'car-svg ' + (movement.includes('left') ? 'turn-left ' : movement.includes('right') ? 'turn-right ' : '') + (movement.startsWith('forward') ? 'forward' : movement.startsWith('reverse') ? 'reverse' : ''));
    $('obstacleArcs').classList.toggle('visible', obstacle);
    $('stateBadge').textContent = state.blocked ? 'BLOQUEADO' : names[movement] || 'PARADO';
    $('stateBadge').className = 'status-pill ' + (isOffline || state.blocked ? 'danger' : state.obstacle ? 'warn' : '');
    $('carStatus').textContent = isOffline ? 'Sem resposta do ESP32' : state.blocked ? 'Avanço bloqueado — obstáculo frontal' : state.obstacle ? 'Obstáculo detetado' : names[movement] || 'PARADO';
    $('leftBeam').classList.toggle('on', state.lights);
    $('rightBeam').classList.toggle('on', state.lights);
    $('leftIndicator').classList.toggle('on', state.left);
    $('rightIndicator').classList.toggle('on', state.right);
    $('leftBrake').classList.toggle('on', state.brake);
    $('rightBrake').classList.toggle('on', state.brake);
    $('distance').innerHTML = state.distance_cm === null ? 'Indisponível' : `${Number(state.distance_cm).toFixed(0)} <small>cm</small>`;
    $('speed').innerHTML = state.speed_kmh === null ? 'Indisponível' : `${Number(state.speed_kmh).toFixed(1).replace('.', ',')} <small>km/h</small>`;
    $('linkValue').textContent = isOffline ? 'Sem ligação' : state.mode === 'demo' ? 'Simulação' : 'Ligado';
    $('linkValue').style.color = isOffline ? 'var(--red)' : 'var(--green)';
    $('linkDetail').textContent = state.mode === 'demo' ? 'Dados simulados — não são medições reais' : isOffline ? 'Últimos dados recebidos' : 'Wi-Fi · HTTP local';
    $('distanceDetail').textContent = state.mode === 'demo' ? 'Sensor ultrassónico · simulado' : isOffline ? 'Última medição (desatualizada)' : 'HC-SR04 · valor comunicado';
    $('modeBadge').textContent = state.mode === 'demo' ? 'MODO DEMO' : 'MODO ESP32';
    $('modeBadge').classList.toggle('live', state.mode === 'esp32' && state.online);
    $('connectionBadge').className = 'chip ' + (isOffline ? 'bad' : 'ok');
    $('connectionText').textContent = isOffline ? 'ESP32 offline' : state.mode === 'demo' ? 'Simulador ativo' : 'ESP32 online';
    $('alertBox').classList.toggle('hidden', !obstacle && !isOffline);
    $('alertTitle').textContent = isOffline ? 'Comunicação perdida' : state.blocked ? 'Avanço bloqueado' : obstacle ? 'Obstáculo detetado' : 'Caminho livre';
    $('alertSub').textContent = isOffline ? 'Controlos desativados' : state.blocked ? 'Paragem de segurança ativa' : obstacle ? 'Aproximação frontal' : 'Sem bloqueio frontal';
    buttons.forEach(b => b.disabled = isOffline);
    $('obstacleButton').textContent = 'Simular obstáculo: ' + (state.blocked ? 'ON' : 'OFF');
    $('obstacleButton').disabled = state.mode !== 'demo';
    updateActiveButtons();
}
// Teste de obstáculo no modo demo.
$('obstacleButton').addEventListener('click', () => {
    if (state.mode !== 'demo')
        return;
    state.blocked = !state.blocked;
    state.obstacle = state.blocked;
    state.distance_cm = state.blocked ? 13 : 86;
    if (state.blocked) {
        mustReleaseForward = true;
        pressed.delete('w');
        transmit(command(), true);
    }
    render();
});
// Troca entre demonstração e ESP32.
$('connectionMode').addEventListener('change', e => {
    resetControls();
    state.mode = e.target.value;
    state.online = state.mode === 'demo';
    state.blocked = false;
    state.obstacle = false;
    state.movement = 'stopped';
    state.distance_cm = state.mode === 'demo' ? 86 : null;
    state.speed_kmh = state.mode === 'demo' ? 0 : null;
    state.brake = false;
    failedPolls = 0;
    render();
    if (state.mode === 'esp32')
        poll();
});
// Repete comandos enquanto houver teclas pressionadas.
heartbeatTimer = setInterval(() => {
    if (pressed.size && state.online)
        transmit(command());
}, CONTROL_MS);
pollTimer = setInterval(poll, STATUS_MS);
render();
