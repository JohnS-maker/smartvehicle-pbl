# SmartVehicle — Definição e Especificação de Requisitos de Software

**Unidade Curricular:** Engenharia de Software
**Curso:** Licenciatura em Engenharia Informática
**Projeto PBL:** SmartVehicle — Veículo Conectado com Dashboard Digital
**Grupo 2:** João Santos, Tomás Pereira, Rui Grosso e Gonçalo Oliveira
**Versão:** 0.3.1 — Revisão dos requisitos
**Data:** 08/11/2026
**Entrega prevista:** 13/11/2026

---

# 1. Contextualização do Projeto

## 1.1. Propósito

O SmartVehicle é um projeto académico que pretende desenvolver um protótipo de veículo de controlo remoto de baixo custo, capaz de reproduzir um conjunto selecionado de funcionalidades de um automóvel convencional.

O projeto procura demonstrar a integração entre sistemas eletrónicos, comunicação e software, disponibilizando uma plataforma acessível para aprendizagem e experimentação.

No âmbito da Unidade Curricular de Engenharia de Software, este relatório apresenta os requisitos da aplicação responsável pelo controlo e monitorização do veículo através de um dashboard digital.

## 1.2. Problema e necessidade

A integração entre aplicações informáticas e sistemas eletrónicos utilizados em veículos conectados pode ser difícil de compreender apenas através de conteúdos teóricos.

O SmartVehicle pretende disponibilizar uma plataforma prática que permita observar e experimentar essa integração, utilizando funcionalidades de movimento, iluminação, monitorização e segurança operacional.

O projeto não pretende substituir um automóvel real, mas demonstrar princípios tecnológicos num protótipo de escala reduzida.

## 1.3. Público-alvo

O projeto destina-se principalmente a estudantes, autodidatas e entusiastas de tecnologia interessados em compreender a integração entre software e sistemas físicos.

O utilizador poderá explorar o funcionamento do veículo através do dashboard e consultar a documentação técnica e o código-fonte disponibilizados pelo projeto.

## 1.4. Âmbito da aplicação

A aplicação deverá permitir:

- Autenticar o operador.
- Controlar o movimento e a direção do veículo.
- Controlar as funcionalidades de iluminação previstas.
- Consultar indicadores e estados comunicados pelo veículo.
- Visualizar uma representação tridimensional dinâmica.
- Identificar situações de obstáculo, bloqueio e perda de comunicação.

A primeira versão será utilizada num computador e funcionará através de uma rede Wi-Fi local.

**Cenário de utilização:** o operador acede à aplicação através de um computador ligado à rede Wi-Fi local, autentica-se e passa a poder controlar o veículo e consultar os estados e indicadores disponibilizados pelo subsistema embarcado.

A decisão entre uma aplicação web e uma aplicação desktop permanece em avaliação pelo grupo.

O hardware, os sensores, os atuadores e o firmware do ESP32 são considerados componentes externos à aplicação. A especificação centra-se nas necessidades do operador e nos comportamentos do software aplicacional.

---

# 2. Definição e Especificação de Requisitos

## 2.1. Formato adotado

Cada requisito funcional e não funcional é identificado por um código único, uma descrição, uma prioridade e uma criticidade. Os critérios de aceitação dos requisitos funcionais são apresentados após cada tabela, identificando explicitamente os requisitos que verificam; os métodos de verificação dos requisitos não funcionais constam de uma tabela própria.

Os identificadores não são reutilizados nem renumerados: os requisitos acrescentados durante a revisão recebem o identificador seguinte disponível (RF-49 e seguintes; RNF-09 e seguintes) e são incluídos na tabela da respetiva área funcional.

A prioridade utiliza a técnica MoSCoW:

- **Must Have (M):** indispensável à primeira versão funcional.
- **Should Have (S):** importante, mas não indispensável ao MVP.
- **Could Have (C):** funcionalidade desejável, condicionada à disponibilidade de recursos.
- **Won't Have (W):** excluída do âmbito da versão atual.

A criticidade considera as consequências do incumprimento:

- **Alta (A):** impacto significativo na segurança, no controlo ou nas funcionalidades essenciais.
- **Média (M):** comprometimento relevante da utilização ou de uma funcionalidade complementar.
- **Baixa (B):** impacto limitado, sobretudo na experiência de utilização.

As prioridades e criticidades seguintes são propostas iniciais que necessitam de validação pelo grupo.

## 2.2. Requisitos Funcionais

### 2.2.1. Autenticação e navegação

| ID    | Requisito funcional                                                                                                                                                              | Prioridade | Criticidade |
| ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ----------- |
| RF-01 | Apresentar um ecrã inicial com a identidade visual do SmartVehicle.                                                                                                              | C          | B           |
| RF-02 | Permitir a autenticação mediante identificador de utilizador e palavra-passe válidos.                                                                                            | M          | A           |
| RF-03 | Recusar a autenticação quando as credenciais forem inválidas.                                                                                                                    | M          | A           |
| RF-04 | Apresentar uma mensagem de erro após uma tentativa de autenticação recusada.                                                                                                     | M          | M           |
| RF-05 | Disponibilizar o dashboard após autenticação bem-sucedida.                                                                                                                       | M          | M           |
| RF-06 | Impedir a utilização das funções de controlo sem uma sessão autenticada.                                                                                                         | M          | A           |
| RF-07 | Disponibilizar uma área de conta onde o operador consulta o seu identificador de utilizador e altera a palavra-passe.                                                            | C          | B           |
| RF-08 | Permitir ao operador terminar a sessão.                                                                                                                                          | M          | M           |
| RF-09 | Apresentar orientação contextual no primeiro acesso do utilizador ao dashboard.                                                                                                  | C          | B           |
| RF-10 | Disponibilizar uma funcionalidade de ajuda acessível pelo dashboard.                                                                                                             | S          | B           |
| RF-49 | Terminar automaticamente a sessão após 30 minutos sem interação do operador, contando apenas o tempo em que nenhum controlo está pressionado e a aplicação não transmite solicitações de movimento. | S          | M           |

#### Critérios de aceitação principais

- **RF-02, RF-05:** Credenciais válidas permitem iniciar uma sessão e aceder ao dashboard.
- **RF-03, RF-04:** Credenciais inválidas impedem o acesso e originam uma mensagem de erro.
- **RF-03:** A aplicação permite uma nova tentativa de autenticação imediatamente após uma tentativa falhada.
- **RF-06:** Sem sessão válida, as solicitações de controlo não são autorizadas.
- **RF-08:** Após terminar a sessão, a utilização das funcionalidades protegidas exige nova autenticação.
- **RF-01:** O ecrã inicial apresenta o nome e o logótipo do SmartVehicle antes do acesso ao ecrã de autenticação.
- **RF-07:** A área de conta apresenta o identificador do utilizador autenticado e permite alterar a palavra-passe mediante a indicação da palavra-passe atual.
- **RF-09:** A orientação contextual é apresentada automaticamente apenas no primeiro acesso do utilizador ao dashboard.
- **RF-10:** A ajuda é acessível a partir do dashboard e descreve os controlos disponíveis e os estados apresentados.
- **RF-49:** Após 30 minutos sem qualquer controlo pressionado e sem solicitações de movimento transmitidas, a sessão termina e a utilização das funcionalidades protegidas exige nova autenticação; enquanto existir um controlo ativo, a sessão não expira. A contagem baseia-se apenas no estado da aplicação, não dependendo de dados recebidos do veículo.

**Dependência:** As credenciais são validadas e armazenadas pelo componente responsável pela autenticação (servidor local, no caso da solução web, ou módulo local da aplicação, no caso da solução desktop). No MVP, as contas de operador são criadas previamente pelo grupo, não existindo registo autónomo de utilizadores.

### 2.2.2. Movimento e direção

| ID    | Requisito funcional                                                                                                                                         | Prioridade | Criticidade |
| ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ----------- |
| RF-11 | Permitir ao operador solicitar o avanço do veículo.                                                                                                         | M          | A           |
| RF-12 | Permitir ao operador solicitar o recuo do veículo.                                                                                                          | M          | A           |
| RF-13 | Permitir ao operador solicitar uma mudança de direção para a esquerda.                                                                                      | M          | A           |
| RF-14 | Permitir ao operador solicitar uma mudança de direção para a direita.                                                                                       | M          | A           |
| RF-15 | Permitir ao operador solicitar a paragem do veículo.                                                                                                        | M          | A           |
| RF-16 | Permitir combinar uma solicitação de avanço ou recuo com uma solicitação de direção.                                                                        | M          | A           |
| RF-17 | Manter a solicitação de movimento enquanto o respetivo controlo de deslocação permanece pressionado.                                                        | M          | A           |
| RF-18 | Atualizar a solicitação de movimento quando um controlo é libertado, considerando os restantes controlos pressionados.                                      | M          | A           |
| RF-19 | Solicitar a paragem da deslocação quando o operador deixa de manter pressionados os controlos que a sustentam.                                              | M          | A           |
| RF-50 | Solicitar a paragem enquanto «Avançar» e «Recuar» estiverem pressionados em simultâneo.                                                                     | M          | A           |
| RF-51 | Manter a direção neutra enquanto «Esquerda» e «Direita» estiverem pressionados em simultâneo.                                                               | M          | A           |
| RF-52 | Solicitar apenas a orientação das rodas dianteiras, sem deslocação, quando um controlo de direção for pressionado isoladamente.                             | M          | M           |
| RF-57 | Cancelar os controlos ativos e solicitar a paragem quando a interface perder o foco durante uma solicitação de movimento, se existir comunicação operacional. | M          | A           |

#### Critérios de aceitação principais

- **RF-11 a RF-15:** O acionamento de cada controlo origina a solicitação correspondente.
- **RF-16, RF-17:** Manter «Avançar» e «Esquerda» pressionados permite solicitar uma curva à esquerda durante o avanço.
- **RF-18:** Libertar «Esquerda» enquanto «Avançar» permanece pressionado faz regressar a solicitação ao avanço sem viragem.
- **RF-19:** Libertar o último controlo de deslocação provoca uma solicitação de paragem.
- **RF-46:** A aplicação não transmite comandos de movimento quando a comunicação está declarada indisponível.
- **RF-15:** O controlo de paragem permanece sempre visível no dashboard e pode ser acionado por teclado e por rato.
- **RF-50:** Com «Avançar» e «Recuar» pressionados em simultâneo, a aplicação solicita a paragem; ao libertar um deles, passa a solicitar o movimento correspondente ao controlo que permanece pressionado.
- **RF-51:** Com «Avançar», «Esquerda» e «Direita» pressionados, a aplicação solicita o avanço sem viragem.
- **RF-52:** Pressionar apenas «Esquerda» ou «Direita» altera a orientação das rodas dianteiras sem originar a deslocação do veículo.
- **RF-57:** Com «Avançar» pressionado, mudar para outra janela cancela os controlos ativos e origina uma solicitação de paragem; ao regressar à aplicação, o movimento só é retomado após uma nova pressão do controlo.

**Dependência:** A aplicação comunica solicitações ao subsistema do veículo; não garante, por si só, a execução física dos comandos. A segurança local deve ser assegurada pelo subsistema embarcado, incluindo a imobilização autónoma do veículo caso uma solicitação de paragem (por exemplo, a prevista no RF-57) não chegue ao veículo. O MVP não disponibiliza uma paragem de emergência distinta da paragem normal (RF-15), sendo esta limitação identificada na secção 2.4.

### 2.2.3. Iluminação

| ID    | Requisito funcional                                                               | Prioridade | Criticidade |
| ----- | --------------------------------------------------------------------------------- | ---------- | ----------- |
| RF-20 | Permitir solicitar a ativação manual dos faróis.                                  | S          | M           |
| RF-21 | Permitir solicitar a desativação manual dos faróis.                               | S          | M           |
| RF-22 | Permitir alternar o estado do pisca esquerdo através do respetivo controlo.       | S          | M           |
| RF-23 | Permitir alternar o estado do pisca direito através do respetivo controlo.        | S          | M           |
| RF-24 | Permitir selecionar o modo automático de iluminação disponibilizado pelo veículo. | C          | B           |
| RF-25 | Apresentar o modo de iluminação confirmado pelo veículo.                          | C          | B           |

#### Critérios de aceitação principais

- **RF-20, RF-21:** A solicitação de ativação ou desativação dos faróis é transmitida através da interface de comunicação.
- **RF-22, RF-23:** O primeiro clique num controlo de pisca desligado solicita a sua ativação; o clique seguinte solicita a desativação.
- **RF-24:** Caso o modo automático seja implementado, a aplicação permite selecioná-lo, mas a avaliação da luminosidade e o controlo automático dos faróis são realizados pelo ESP32.
- **RF-25:** O modo de iluminação apresentado corresponde ao último modo confirmado pelo veículo, e não ao último modo solicitado.

**Dependência:** O modo automático requer sensor de luminosidade e suporte no firmware, sendo uma funcionalidade opcional.

### 2.2.4. Monitorização

| ID    | Requisito funcional                                                                                            | Prioridade | Criticidade |
| ----- | -------------------------------------------------------------------------------------------------------------- | ---------- | ----------- |
| RF-26 | Apresentar a velocidade estimada do veículo em km/h, identificando-a como estimativa.                          | S          | M           |
| RF-27 | Apresentar a percentagem de carga da bateria comunicada pelo veículo.                                          | S          | M           |
| RF-28 | Representar graficamente a percentagem de bateria através de uma barra proporcional.                           | S          | B           |
| RF-29 | Apresentar a temperatura ambiente medida junto ao veículo, em graus Celsius.                                   | C          | B           |
| RF-53 | Validar os dados de monitorização recebidos do veículo antes de atualizar os indicadores do dashboard.         | M          | M           |
| RF-54 | Apresentar a indicação «Indisponível» num indicador quando não existir uma medição válida para esse indicador. | M          | M           |

#### Critérios de aceitação principais

- **RF-26:** A velocidade é apresentada com a unidade km/h e a identificação de que se trata de uma estimativa.
- **RF-27:** A percentagem de bateria é apresentada entre 0% e 100%.
- **RF-28:** A barra gráfica acompanha proporcionalmente a percentagem de bateria.
- **RF-29:** Uma medição válida de temperatura recebida do veículo é apresentada em °C.
- **RF-53:** Valores fora do intervalo admissível (por exemplo, bateria fora do intervalo 0–100% ou velocidade negativa), mensagens incompletas e estados não reconhecidos não são apresentados como medições válidas.
- **RF-54:** Quando não existe uma medição válida, o indicador apresenta «Indisponível» em vez de um valor numérico e a barra de bateria não é preenchida.

**Dependências:** A velocidade é estimada pelo subsistema embarcado a partir das medições de rotação das rodas obtidas pelos encoders; a percentagem de bateria é calculada pelo firmware a partir da tensão medida da bateria. A precisão aceitável da estimativa de velocidade permanece por validar (QP-05).

### 2.2.5. Modelo tridimensional

| ID    | Requisito funcional                                                                                       | Prioridade | Criticidade |
| ----- | --------------------------------------------------------------------------------------------------------- | ---------- | ----------- |
| RF-30 | Apresentar um modelo tridimensional do veículo no dashboard.                                              | S          | B           |
| RF-31 | Atualizar a representação da orientação das rodas dianteiras conforme o estado comunicado pelo veículo.   | S          | M           |
| RF-32 | Atualizar a representação dos faróis conforme o estado comunicado pelo veículo.                           | S          | M           |
| RF-33 | Atualizar a representação dos piscas conforme o estado comunicado pelo veículo.                           | S          | M           |
| RF-34 | Atualizar a representação das luzes de travagem conforme o estado comunicado pelo veículo.                | S          | M           |

#### Critérios de aceitação principais

- **RF-31 a RF-34:** Cada alteração visual corresponde a uma informação de estado recebida do veículo.
- **RF-31 a RF-34:** Um comando enviado sem confirmação de mudança de estado não é representado como executado.
- **RF-30:** O modelo não necessita de animar o avanço ou recuo do veículo.
- **RF-34:** As luzes de travagem não têm comando associado na aplicação: são acionadas pelo subsistema embarcado quando o veículo trava, limitando-se a aplicação a representar o estado comunicado.

### 2.2.6. Alertas e segurança operacional

| ID    | Requisito funcional                                                                                                                                       | Prioridade | Criticidade |
| ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ----------- |
| RF-35 | Apresentar um alerta quando o veículo comunicar a presença de um obstáculo frontal.                                                                       | M          | A           |
| RF-36 | Apresentar a indicação de bloqueio frontal quando esse estado for comunicado pelo veículo.                                                                | M          | A           |
| RF-37 | Impedir novas solicitações de avanço enquanto existir bloqueio frontal comunicado pelo veículo.                                                           | M          | A           |
| RF-38 | Interromper as solicitações de avanço em curso quando receber a indicação de bloqueio frontal.                                                            | M          | A           |
| RF-39 | Atualizar a indicação de bloqueio quando receber a confirmação de que a condição terminou.                                                                | M          | A           |
| RF-55 | Exigir uma nova solicitação de avanço por parte do operador, após o fim do bloqueio frontal, antes de transmitir novos comandos de deslocação para a frente. | M          | A           |

#### Critérios de aceitação principais

- **RF-35, RF-36:** A deteção de um obstáculo e o bloqueio frontal são apresentados como estados distintos.
- **RF-37:** Quando existe bloqueio frontal ativo, a aplicação não transmite solicitações de avanço, incluindo combinações com direção.
- **RF-38:** Se o bloqueio for comunicado durante uma solicitação de avanço, a aplicação deixa de emitir essa solicitação.
- **RF-36, RF-37:** Os restantes comandos só permanecem disponíveis quando são compatíveis com o estado de segurança comunicado pelo veículo.
- **RF-39:** O alerta de bloqueio só é atualizado para o estado inativo após informação correspondente recebida do veículo.
- **RF-55:** Após o fim do bloqueio, manter «Avançar» pressionado não retoma o movimento; o avanço só é solicitado depois de o controlo ser libertado e novamente pressionado.

**Dependência:** A proteção física e a imobilização perante obstáculos são asseguradas pelo veículo, independentemente da aplicação.

### 2.2.7. Comunicação e recuperação de falhas

| ID    | Requisito funcional                                                                                                                                                    | Prioridade | Criticidade |
| ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ----------- |
| RF-40 | Apresentar o estado da comunicação com o veículo.                                                                                                                      | M          | A           |
| RF-41 | Verificar periodicamente a disponibilidade da comunicação operacional com o veículo.                                                                                   | M          | A           |
| RF-42 | Declarar a comunicação indisponível após três verificações consecutivas sem resposta.                                                                                  | M          | A           |
| RF-43 | Apresentar um aviso quando for detetada perda de comunicação.                                                                                                          | M          | A           |
| RF-44 | Manter visíveis os últimos valores de monitorização recebidos durante a falha.                                                                                         | M          | M           |
| RF-45 | Conservar os últimos estados confirmados do modelo 3D durante uma falha.                                                                                               | S          | M           |
| RF-46 | Desativar os controlos de movimento e iluminação quando a comunicação estiver indisponível.                                                                            | M          | A           |
| RF-47 | Sincronizar os estados apresentados no dashboard após o restabelecimento da comunicação.                                                                               | M          | A           |
| RF-48 | Reativar os controlos disponíveis após o restabelecimento da comunicação e a conclusão da sincronização, sem retransmitir solicitações de movimento anteriores à falha. | M          | A           |
| RF-56 | Indicar o estado dos comandos enviados ao veículo (pendente, confirmado ou rejeitado), considerando-se confirmado um comando quando o veículo comunica o estado correspondente. | C          | M           |

#### Critérios de aceitação principais

- **RF-41, RF-42:** A aplicação deteta a indisponibilidade do veículo mesmo sem interação do operador.
- **RF-43, RF-46:** A falha de comunicação origina um aviso e a desativação dos controlos.
- **RF-44, RF-45:** Os últimos valores recebidos continuam visíveis durante a falha, acompanhados pelo aviso de perda de comunicação.
- **RF-47, RF-48:** Após a recuperação, a aplicação obtém estados atualizados antes de reativar os controlos.
- **RF-48:** A reativação dos controlos não exige confirmação manual, mas não retransmite solicitações de movimento anteriores à falha: um controlo mantido pressionado durante a falha só origina movimento depois de ser libertado e novamente pressionado.
- **RF-40:** O estado da comunicação com o veículo (disponível ou indisponível) está permanentemente visível no dashboard.
- **RF-56:** Um comando enviado é apresentado como pendente até o veículo comunicar o estado correspondente (confirmado) ou a sua rejeição; um comando rejeitado origina uma indicação visível ao operador. Um comando que permaneça pendente durante mais de 2 segundos passa a ser apresentado como «não confirmado» e não é reenviado automaticamente. A implementação depende do contrato de comunicação (QP-09).

**Parâmetros de verificação (metas propostas, sujeitas a validação experimental):** intervalo de 1 s entre os instantes de início de verificações consecutivas, independentemente da duração de cada verificação; tempo máximo de resposta de 500 ms; falha declarada após três verificações consecutivas sem resposta; tempo máximo de deteção de 4 s. Com verificações iniciadas a intervalos fixos, a falha é declarada, no pior caso, cerca de 3,5 s após a interrupção, respeitando o limite do RNF-02.

**Dependência:** O contrato de comunicação com o subsistema embarcado (formato das mensagens de comando e de estado, mensagens de verificação periódica, identificação de mensagens inválidas e de comandos rejeitados) deve ser acordado com os responsáveis pelo firmware e documentado como especificação de interface (QP-09).

## 2.3. Requisitos Não Funcionais

| ID     | Categoria            | Descrição                                                                                                                                                                                                                                                                  | Prioridade proposta | Criticidade proposta |
| ------ | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | -------------------- |
| RNF-01 | Desempenho           | O intervalo entre o acionamento de um controlo e o início do envio do respetivo comando pela aplicação não deve ultrapassar 100 ms em, pelo menos, 95% das medições (meta proposta, sujeita a validação experimental). Este valor exclui a transmissão na rede, a receção pelo veículo e a execução física do comando. | M                   | A                    |
| RNF-02 | Fiabilidade          | A perda de comunicação com o veículo deve ser detetada em, no máximo, 4 segundos após a interrupção (meta proposta, sujeita a validação experimental).                                                                                                                      | M                   | A                    |
| RNF-03 | Fiabilidade          | As verificações de comunicação devem ser iniciadas com um intervalo máximo de 1 segundo, medido entre os instantes de início de verificações consecutivas, considerando-se falhada a verificação sem resposta em 500 ms (meta proposta, sujeita a validação experimental). | M                   | A                    |
| RNF-04 | Segurança            | As palavras-passe devem ser armazenadas pelo componente responsável pela autenticação através de um algoritmo de hash de palavras-passe (por exemplo, bcrypt ou Argon2) com salt individual, nunca em texto simples.                                                       | M                   | A                    |
| RNF-05 | Usabilidade          | Os controlos de movimento, paragem e iluminação devem ser acionáveis por teclado e por rato a partir do dashboard, sem navegação para outros ecrãs.                                                                                                                         | M                   | M                    |
| RNF-06 | Compatibilidade      | A aplicação deve funcionar num computador de secretária ou portátil com Windows 10 ou Windows 11 (64 bits), com pelo menos 4 GB de RAM e interface Wi-Fi.                                                                                                                  | M                   | M                    |
| RNF-07 | Compatibilidade      | Caso seja adotada uma solução web (QP-01), as funcionalidades previstas devem funcionar nas versões estáveis atuais do Google Chrome e do Microsoft Edge. A obrigatoriedade deste requisito depende da decisão arquitetural.                                                | M, condicionado     | M                    |
| RNF-08 | Ambiente operacional | A aplicação deve operar exclusivamente através da rede Wi-Fi local que liga o computador e o veículo, sem depender de acesso à Internet.                                                                                                                                    | M                   | A                    |
| RNF-09 | Segurança            | A rede Wi-Fi local utilizada pelo sistema deve estar protegida por WPA2 ou superior, limitando o acesso aos dispositivos autorizados.                                                                                                                                      | S                   | M                    |
| RNF-10 | Manutenibilidade     | A aplicação deve manter uma separação lógica entre os componentes de autenticação, comunicação, controlo e apresentação, permitindo a sua manutenção e teste de forma independente.                                                                                         | S                   | B                    |
| RNF-11 | Usabilidade          | Os estados ativo e inativo dos controlos, a perda de comunicação e os alertas de segurança devem ser identificados através de cor e de texto ou ícone, distinguindo-se dos estados normais.                                                                                 | M                   | M                    |

### Verificação dos requisitos não funcionais

| ID     | Método de verificação                                                                                                                                          | Estado                      |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| RNF-01 | Medições repetidas (mínimo de 50) do tempo entre a ação do operador e o início do envio do comando.                                                            | Meta proposta: 100 ms (95%) |
| RNF-02 | Interrupção da comunicação e medição do tempo até à deteção da falha.                                                                                          | Meta proposta: 4 s          |
| RNF-03 | Registo dos intervalos entre verificações sucessivas de comunicação.                                                                                           | Meta proposta: 1 s / 500 ms |
| RNF-04 | Inspeção da implementação e dos dados de autenticação armazenados.                                                                                             | Critério definido           |
| RNF-05 | Execução das tarefas essenciais apenas com teclado e apenas com rato, sem navegação para outros ecrãs.                                                         | Critério definido           |
| RNF-06 | Execução dos testes funcionais num computador com Windows 10 ou 11 que cumpra os requisitos mínimos.                                                           | Ambiente definido           |
| RNF-07 | Execução dos testes funcionais essenciais em Chrome e Edge, se for adotada a solução web.                                                                      | Condicionado à arquitetura  |
| RNF-08 | Testes de controlo e monitorização com o computador e o veículo ligados à rede Wi-Fi local, sem acesso à Internet.                                             | Critério definido           |
| RNF-09 | Inspeção da configuração de segurança da rede Wi-Fi utilizada.                                                                                                 | Critério definido           |
| RNF-10 | Revisão da estrutura do código e execução de testes unitários por componente.                                                                                  | Critério definido           |
| RNF-11 | Inspeção do dashboard em cada estado (controlos ativos e inativos, perda de comunicação e alertas), confirmando a identificação por cor e por texto ou ícone. | Critério definido           |

## 2.4. Funcionalidades excluídas do MVP ou previstas para evolução

Os seguintes requisitos têm prioridade Won't Have (W) na versão atual:

- **WH-01:** Autenticação por RFID.
- **WH-02:** Interface adaptada especificamente a smartphones.
- **WH-03:** Controlo remoto através da Internet.
- **WH-04:** Animação do deslocamento do veículo no modelo 3D.
- **WH-05:** Paragem de emergência dedicada, distinta da paragem normal (RF-15); a imobilização de emergência é assegurada pelo subsistema embarcado.

A iluminação manual, os indicadores e o modelo 3D permanecem previstos na visão do projeto, com prioridade inferior à das funcionalidades essenciais do MVP. A iluminação automática através de sensor de luminosidade (RF-24) mantém-se como Could Have, dependente do sensor e do suporte no firmware.

## 2.5. Questões pendentes de validação

- **QP-01 — Arquitetura:** Selecionar aplicação web local ou aplicação desktop.
- **QP-02 — Movimento (resolvida):** O tratamento de controlos contraditórios e de controlos de direção utilizados isoladamente foi definido nos RF-50 a RF-52.
- **QP-03 — Segurança (resolvida):** Após o fim de um bloqueio frontal, é exigida uma nova solicitação de avanço por parte do operador (RF-55).
- **QP-04 — Iluminação:** Definir a precedência entre comandos manuais e o modo automático opcional.
- **QP-05 — Monitorização:** Confirmar a disponibilidade dos dados dos encoders e da medição de tensão da bateria, e definir a precisão aceitável da estimativa de velocidade.
- **QP-06 — Desempenho:** Validar experimentalmente as metas propostas nos RNF-01 a RNF-03 para o tempo de resposta e a deteção de falhas, ajustando-as se necessário.
- **QP-07 — Autenticação (risco aceite):** O MVP não limita o número de tentativas de autenticação, dada a utilização restrita a uma rede Wi-Fi local. O risco associado é aceite nesta versão e deverá ser reavaliado em versões futuras.
- **QP-08 — Integração do PBL:** Confirmar que a prioridade atribuída à iluminação é compatível com as entregas e objetivos estabelecidos pelas restantes unidades curriculares.
- **QP-09 — Interface de comunicação:** Definir, com os responsáveis pelo firmware, o contrato de comunicação entre a aplicação e o subsistema embarcado (formato das mensagens, verificação periódica, mensagens inválidas e comandos rejeitados).

## 2.6. Considerações finais da especificação

A especificação apresentada resulta do levantamento e da análise inicial das necessidades do projeto SmartVehicle.

Os requisitos foram organizados por áreas funcionais, procurando estabelecer descrições claras, atómicas e verificáveis, bem como uma distinção entre funcionalidades essenciais e complementares.

Os requisitos assinalados como pendentes deverão ser refinados e validados pelo grupo antes da aprovação definitiva da especificação.

A implementação e os testes de integração permitirão posteriormente confirmar a conformidade do software com os requisitos aprovados.
