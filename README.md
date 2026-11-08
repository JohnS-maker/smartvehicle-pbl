# SmartVehicle — Dashboard

Projeto PBL. O dashboard está organizado em três ficheiros, para ser mais fácil trabalhar no VS Code.

## Ficheiros

- `index.html` — estrutura da página e desenho SVG do carro.
- `css/style.css` — aspeto do dashboard e animações.
- `js/app.js` — teclado, botões, simulação e pedidos HTTP.

## Testar

Abrir o ficheiro `index.html` no Chrome ou Edge. No modo de demonstração, usar **W/A/S/D**, **Espaço** ou os botões. Também é possível ativar o obstáculo de teste. Não é preciso instalar programas.

## Integração com ESP32

O modo ESP32 usa `POST /api/control` para comandos e `GET /api/status` para receber os dados do carro. Para funcionar, a página deve ser disponibilizada pelo ESP32, que ainda precisa de firmware adequado.

**Nota:** a versão atual trabalha em simulação. A leitura real dos sensores e o controlo dos motores ainda têm de ser integrados e testados.

