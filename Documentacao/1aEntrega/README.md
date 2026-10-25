# SmartVehicle – Proposta Inicial do Projeto

## 1. Identificação do Projeto

**Universidade:** Universidade Europeia  
**Faculdade/Escola:** IADE – Faculdade de Design, Tecnologia e Comunicação  
**Curso:** Licenciatura em Engenharia Informática  
**Ano letivo:** 2026/2027  
**Semestre:** 5.º Semestre  

**Nome do Projeto:** SmartVehicle – Veículo Conectado com Dashboard Digital  

**Grupo: 2**

**Elementos do Grupo:**
- Joao Santos - 50031111; 
- Tomas Pereira - 20241740;
- Rui Grosso - 20241591;
- Gonçalo Oliveira - 20241565;

**Unidades Curriculares envolvidas:**
- Sistemas Distribuídos
- Computação Física e IoT
- Inteligência Artificial
- Engenharia de Software

**Palavras-chave:** ESP32, IoT, SmartVehicle, sensores, atuadores, telemetria, dashboard digital, sistemas distribuídos, inteligência artificial.

**Repositório GitHub:** https://github.com/JohnS-maker/smartvehicle-pbl

## 2. Descrição do Projeto

O SmartVehicle é um protótipo de um pequeno veículo inteligente baseado no microcontrolador ESP32.

O objetivo é construir um veículo físico capaz de se movimentar, utilizar sensores e executar algumas funções semelhantes às existentes num automóvel moderno.

O veículo deverá conseguir avançar, recuar, virar e parar, medir a sua velocidade e detetar obstáculos à sua frente. Depois de estas funcionalidades essenciais estarem implementadas, poderão ser adicionadas funcionalidades complementares, como faróis, piscas e buzina.

Será desenvolvido um dashboard digital que permitirá controlar o veículo e visualizar informação sobre o seu funcionamento, como velocidade, distância a obstáculos e estado de alguns dos seus sistemas.

O ESP32 será responsável pelo controlo do veículo e pela recolha de dados dos sensores. Esses dados serão enviados através de Wi-Fi para um servidor, onde poderão ser armazenados numa base de dados e utilizados pelo dashboard e pela componente de Inteligência Artificial.

O projeto será desenvolvido de forma progressiva, começando pelas funções mais simples do veículo e acrescentando posteriormente sensores, comunicação, dashboard e outras funcionalidades.

## 3. Problema e Motivação

Os automóveis modernos utilizam vários sistemas eletrónicos que trabalham em conjunto, como sensores, unidades de controlo, sistemas de iluminação, medição de velocidade, deteção de obstáculos e comunicação entre diferentes componentes.

### Problema - Como integrar, num veículo de baixo custo, controlo remoto, sensores, telemetria, armazenamento de dados e análise inteligente, mantendo uma arquitetura simples, modular e adequada a um protótipo académico?

O SmartVehicle pretende criar uma versão simplificada deste tipo de sistema, utilizando um pequeno veículo físico e componentes de baixo custo.

A escolha deste projeto permite aplicar, num único protótipo, conhecimentos de hardware, programação, Internet of Things, Sistemas Distribuídos, Engenharia de Software e Inteligência Artificial.

Outra motivação é trabalhar com dados reais recolhidos pelos sensores do veículo. Esses dados poderão ser transmitidos, armazenados e posteriormente utilizados pelo dashboard e pela componente de Inteligência Artificial.

O projeto também permite desenvolver a solução de forma progressiva, começando por funcionalidades básicas e acrescentando novas capacidades à medida que o desenvolvimento avança.

## 4. Objetivos

O principal objetivo do SmartVehicle é desenvolver um pequeno veículo conectado, baseado em ESP32, capaz de ser controlado através de um dashboard digital e de recolher dados do seu funcionamento através de sensores.

### Funcionalidades Essenciais – MVP

A primeira prioridade do projeto será desenvolver um protótipo funcional com as seguintes capacidades:

- controlar o movimento do veículo;
- permitir avançar, recuar, virar e parar;
- controlar os dois motores através do ESP32;
- medir a distância a obstáculos;
- medir a rotação das rodas e estimar a velocidade;
- comunicar através de Wi-Fi;
- enviar dados do veículo para um servidor;
- armazenar os dados recolhidos numa base de dados MySQL;
- apresentar informação básica num dashboard digital;
- permitir o envio de comandos através do dashboard.

Estas funcionalidades constituem o núcleo mínimo do SmartVehicle e terão prioridade durante o desenvolvimento.

### Funcionalidades Complementares

Depois de o núcleo principal estar funcional, poderão ser integradas outras funcionalidades, como:

- faróis;
- piscas;
- buzina;
- deteção da luminosidade ambiente;
- medição da temperatura;
- luzes de travagem;
- luz de marcha-atrás;
- outras funcionalidades que se revelem viáveis durante o desenvolvimento.

### Inteligência Artificial

O projeto deverá também incluir uma componente de Inteligência Artificial.

Esta componente utilizará os dados recolhidos pelos sensores do SmartVehicle, juntamente com pelo menos uma fonte de dados adicional, para realizar uma função analítica ou preditiva.

A funcionalidade concreta da componente de Inteligência Artificial será definida numa fase posterior do projeto, de acordo com os conteúdos e requisitos da respetiva Unidade Curricular.

#### Hipótese Preliminar

Como hipótese inicial, pretende-se estudar uma componente de Inteligência Artificial capaz de analisar ou estimar o risco de aproximação a obstáculos.

O modelo poderá utilizar dados recolhidos pelo SmartVehicle, como:

- distância ao obstáculo;
- velocidade estimada;
- evolução destes valores ao longo do tempo.

Estes dados deverão ser combinados com pelo menos uma fonte adicional, como um conjunto de dados público ou valores de referência relacionados com distância de segurança, velocidade ou travagem.

O objetivo poderá ser classificar diferentes situações, por exemplo como risco baixo, moderado ou elevado, ou estimar a necessidade de intervenção.

Esta componente terá uma função analítica ou preditiva e não substituirá o mecanismo de segurança local do ESP32. O bloqueio imediato do movimento perante um obstáculo continuará a funcionar diretamente no veículo.

A solução final de Inteligência Artificial e a fonte de dados adicional serão validadas posteriormente no âmbito da respetiva Unidade Curricular.

## 5. Público-Alvo

O SmartVehicle é principalmente um projeto académico e demonstrativo.

O protótipo destina-se sobretudo a estudantes, docentes e utilizadores interessados em perceber como diferentes áreas da Engenharia Informática podem ser integradas num único sistema.

O projeto permite demonstrar, de forma prática, a ligação entre:

- microcontroladores;
- sensores e atuadores;
- Internet of Things;
- comunicação entre sistemas;
- armazenamento de dados;
- desenvolvimento de software;
- Inteligência Artificial.

O dashboard será a principal interface de utilização do sistema, permitindo controlar o veículo e acompanhar os dados recolhidos pelos sensores.

O SmartVehicle não pretende ser um produto comercial, mas sim uma plataforma de aprendizagem, demonstração e experimentação.

## 6. Guiões de Teste

### Guião de Teste 1 – Controlo do Movimento

**Objetivo:**  
Verificar se o utilizador consegue controlar corretamente o movimento do SmartVehicle através do dashboard.

**Passos:**

1. Ligar o SmartVehicle.
2. Abrir o dashboard digital.
3. Confirmar que existe comunicação com o veículo.
4. Selecionar o comando para avançar.
5. Confirmar que o veículo se desloca para a frente.
6. Selecionar o comando para virar à esquerda.
7. Confirmar que o veículo altera a direção.
8. Selecionar o comando para virar à direita.
9. Confirmar que o veículo altera a direção.
10. Selecionar o comando para parar.
11. Confirmar que o veículo fica imobilizado.

**Resultado esperado:**  
O veículo deverá responder corretamente aos comandos enviados através do dashboard.

---

### Guião de Teste 2 – Deteção de Obstáculos

**Objetivo:**  
Verificar se o SmartVehicle consegue detetar um obstáculo à sua frente e impedir uma aproximação considerada insegura.

**Passos:**

1. Ligar o SmartVehicle.
2. Colocar um obstáculo à frente do veículo.
3. Colocar o veículo em movimento para a frente.
4. Confirmar que o sensor frontal mede a distância ao obstáculo.
5. Confirmar que essa distância é apresentada no dashboard.
6. Aproximar o veículo do obstáculo.
7. Verificar se o sistema identifica quando a distância fica abaixo do limite de segurança.
8. Confirmar que o veículo deixa de avançar.

**Resultado esperado:**  
O sistema deverá detetar o obstáculo, apresentar a distância no dashboard e impedir o avanço quando a distância for considerada insegura.

---

### Guião de Teste 3 – Telemetria e Dashboard

**Objetivo:**  
Verificar se os dados recolhidos pelos sensores do SmartVehicle são corretamente enviados, armazenados e apresentados no dashboard.

**Passos:**

1. Ligar o SmartVehicle.
2. Confirmar que o ESP32 está ligado à rede Wi-Fi.
3. Ativar a recolha de dados do sensor frontal.
4. Colocar um obstáculo a uma determinada distância do veículo.
5. Confirmar que o ESP32 obtém o valor medido pelo sensor.
6. Confirmar que o valor é enviado para o servidor através da comunicação definida.
7. Verificar se o dado recebido é armazenado na base de dados MySQL.
8. Abrir o dashboard digital.
9. Confirmar que o valor da distância é apresentado no dashboard.
10. Alterar a posição do obstáculo.
11. Confirmar que o novo valor é novamente recolhido, transmitido, armazenado e atualizado no dashboard.

**Resultado esperado:**  
O valor medido pelo sensor deverá percorrer corretamente todo o sistema, desde o ESP32 até ao servidor, base de dados e dashboard, permitindo ao utilizador visualizar informação atualizada sobre o veículo.

## 7. Enquadramento nas Unidades Curriculares

O SmartVehicle integra conteúdos das quatro Unidades Curriculares envolvidas no PBL.

### Sistemas Distribuídos

Nesta Unidade Curricular será trabalhada a arquitetura que permite a comunicação entre os diferentes componentes do sistema.

O SmartVehicle deverá enviar dados através de Wi-Fi para um servidor, permitindo posteriormente a sua utilização por outros componentes da solução, como o dashboard, a base de dados e a componente de Inteligência Artificial.

Será também trabalhado o planeamento e a gestão do projeto.

### Computação Física e IoT

Esta Unidade Curricular estará diretamente relacionada com o desenvolvimento do veículo físico.

Serão trabalhados:

- programação do ESP32;
- utilização de sensores;
- utilização de atuadores;
- controlo dos motores;
- recolha de dados;
- comunicação através de Wi-Fi;
- envio dos dados recolhidos para o servidor.

### Engenharia de Software

Nesta Unidade Curricular serão definidos e especificados os requisitos do sistema.

Serão também trabalhados:

- requisitos funcionais;
- requisitos não funcionais;
- modelação da solução;
- testes;
- validação do sistema.

### Inteligência Artificial

Nesta Unidade Curricular serão utilizados os dados recolhidos pelo SmartVehicle para desenvolver uma componente analítica ou preditiva.

Os dados provenientes dos sensores deverão ser combinados com pelo menos uma fonte adicional de dados.

A componente de Inteligência Artificial será definida e desenvolvida numa fase posterior, de acordo com os requisitos e conteúdos da UC.

## 8. Requisitos Técnicos e Tecnologias

Nesta fase do projeto, os requisitos técnicos principais estão definidos, enquanto algumas tecnologias e decisões de implementação permanecem provisórias e poderão ser ajustadas durante o desenvolvimento.

### Requisitos Técnicos Principais

O sistema deverá:

- utilizar um microcontrolador ESP32;
- integrar sensores e atuadores;
- controlar os dois motores DC do veículo;
- recolher dados dos sensores;
- comunicar através de Wi-Fi;
- enviar os dados recolhidos para um servidor Web;
- utilizar uma API REST para a transmissão dos dados;
- armazenar informação numa base de dados MySQL;
- disponibilizar os dados recolhidos ao dashboard;
- permitir ao utilizador enviar comandos para controlar o veículo;
- incluir uma componente de Inteligência Artificial baseada nos dados recolhidos pelos sensores e em pelo menos uma fonte de dados adicional.

### Tecnologias Previstas

**Hardware principal:**
- ESP32;
- chassis 2WD;
- motores DC;
- controlador de motores TB6612FNG;
- sensor ultrassónico HC-SR04;
- módulos de sensor ótico de velocidade com LM393;
- discos encoder.

**Hardware complementar:**
- LEDs;
- buzzer;
- sensor de luminosidade;
- sensor de temperatura;
- outros componentes que se revelem necessários.

**Software e ferramentas:**
- Arduino IDE;
- Wokwi;
- Git;
- GitHub;
- MySQL;
- API REST;
- tecnologias Web para desenvolvimento do dashboard.

A tecnologia utilizada para implementar o backend, o mecanismo final de transmissão dos comandos para o veículo e as ferramentas utilizadas na componente de Inteligência Artificial serão definidos posteriormente.

Estas escolhas serão realizadas de acordo com os requisitos do projeto, a compatibilidade entre os diferentes componentes e a evolução do protótipo.

## 9. Arquitetura da Solução

A arquitetura do SmartVehicle será composta por vários componentes que comunicam entre si.

O ESP32 será a unidade principal instalada no veículo. Será responsável pela leitura dos sensores, controlo dos motores e ativação dos diferentes atuadores.

A comunicação com o restante sistema será realizada através de Wi-Fi. O ESP32 enviará os dados recolhidos para um servidor Web através de uma API REST e receberá os comandos necessários ao controlo do veículo.

O servidor Web funcionará como ponto central de comunicação entre o veículo, o dashboard e a base de dados MySQL.

O dashboard digital permitirá ao utilizador visualizar os dados do SmartVehicle e enviar comandos para o sistema.

A componente de Inteligência Artificial utilizará os dados recolhidos pelos sensores, juntamente com pelo menos uma fonte de dados adicional. A funcionalidade concreta desta componente será definida posteriormente.

A arquitetura preliminar será:

```text
                         ┌──────────────────────┐
                         │  Dashboard Digital   │
                         │ controlo + informação│
                         └──────────┬───────────┘
                                    │
                                    ↕
                         ┌──────────────────────┐
                         │ Servidor Web /       │
                         │ API REST             │
                         └───────┬───────┬──────┘
                                 │       │
                                 │       │ Wi-Fi
                                 ▼       ▼
                        ┌────────────┐  ┌──────────────┐
                        │   MySQL    │  │    ESP32     │
                        └─────┬──────┘  └──────┬───────┘
                              │                │
                              │          ┌─────┴─────┐
                              │          ▼           ▼
                              │      ┌────────┐  ┌──────────┐
                              │      │Sensores│  │Atuadores │
                              │      └────────┘  └──────────┘
                              │
                              ▼
                     ┌─────────────────┐
Fonte de dados ─────►│ Inteligência    │
adicional            │ Artificial      │
                     └────────┬────────┘
                              │
                              └──► resultados para o sistema
```

### Fluxo Principal de Dados

1. Os sensores recolhem informação do veículo.
2. O ESP32 recebe e processa os dados.
3. O ESP32 envia os dados através de Wi-Fi para o servidor Web.
4. O servidor armazena a informação necessária na base de dados MySQL.
5. O dashboard consulta o sistema e apresenta a informação ao utilizador.
6. O utilizador pode enviar comandos através do dashboard.
7. O servidor transmite os comandos necessários ao ESP32.
8. A componente de Inteligência Artificial utiliza os dados do SmartVehicle juntamente com uma fonte de dados adicional.
9. Os resultados produzidos pela componente de Inteligência Artificial poderão ser disponibilizados ao restante sistema.

### Segurança Local

Algumas funções de segurança deverão funcionar diretamente no ESP32 e não depender da ligação ao servidor.

Por exemplo, se o sensor frontal detetar um obstáculo demasiado próximo, o ESP32 poderá impedir o veículo de continuar a avançar.

Desta forma, uma função básica de segurança continuará disponível mesmo que exista uma falha temporária na comunicação Wi-Fi.

Esta arquitetura é preliminar e poderá ser ajustada durante o desenvolvimento do projeto.

## 10. Hardware e Software

### Hardware Essencial

Os componentes essenciais são os necessários para construir e testar o núcleo funcional do SmartVehicle.

| Componente | Função no Projeto |
|---|---|
| ESP32 | Unidade principal de controlo do veículo |
| Chassis 2WD | Estrutura física do SmartVehicle |
| 2 Motores DC | Movimento do veículo |
| TB6612FNG | Controlo dos motores |
| HC-SR04 | Medição da distância a obstáculos |
| 2 módulos de sensor ótico de velocidade com LM393 | Leitura dos discos encoder |
| Discos Encoder | Permitem medir a rotação das rodas |
| Breadboard | Montagem e teste dos circuitos |
| Cabos de ligação | Ligação entre os diferentes componentes |
| Sistema de alimentação | Alimentação dos motores e dos restantes componentes |

### Hardware Complementar

Depois de o núcleo principal estar funcional, poderão ser utilizados outros componentes para adicionar novas funcionalidades:

| Componente | Função Prevista |
|---|---|
| LEDs | Faróis, piscas e outras luzes do veículo |
| Buzzer | Simulação da buzina |
| Sensor de luminosidade | Deteção da luz ambiente |
| Sensor de temperatura | Medição da temperatura |
| Outros componentes | Funcionalidades adicionais que se revelem viáveis |

### Lista Preliminar de Material

| Componente | Quantidade | Utilização | Estado |
|---|---:|---|---|
| ESP32 | 1 | Unidade principal de controlo | Adquirido |
| Chassis 2WD | 1 | Estrutura física do veículo | Adquirido |
| Motores DC | 2 | Movimento do veículo | Incluídos no chassis |
| Rodas | 2 | Deslocação do veículo | Incluídas no chassis |
| Discos encoder | 2 | Medição da rotação das rodas | Incluídos no chassis |
| TB6612FNG | 1 | Controlo dos dois motores DC | Adquirido |
| HC-SR04 | 1 | Medição da distância a obstáculos | Adquirido |
| Módulos de sensor ótico com LM393 | 2 | Leitura dos discos encoder | Adquiridos |
| Breadboard | 1 | Montagem e teste dos circuitos | Incluída no kit ESP32 |
| Cabos Dupont | Vários | Ligações elétricas entre componentes | Incluídos no kit ESP32 |
| LEDs | Vários | Iluminação e sinalização | Incluídos no kit ESP32 |
| Resistências | Várias | Proteção e adaptação dos circuitos | Incluídas no kit ESP32 |
| Buzzer | 1 | Simulação da buzina | Incluído no kit ESP32 |
| Sensor de luminosidade | 1 | Deteção da luz ambiente | Incluído no kit ESP32 |
| Sensor de temperatura | 1 | Medição da temperatura | Incluído no kit ESP32 |
| Suporte para 4 pilhas AA | 1 | Alimentação dos motores | Incluído no chassis |
| Pilhas AA | 4 | Alimentação dos motores | A adquirir |
| Componentes para adaptação de tensão do HC-SR04 | A definir | Proteção da entrada do ESP32 | A adquirir / definir |
| Sistema de alimentação final do ESP32 | A definir | Alimentação autónoma do microcontrolador | A definir |

### Software e Tecnologias

Durante o desenvolvimento prevê-se utilizar:

| Software / Tecnologia | Utilização |
|---|---|
| Arduino IDE | Programação do ESP32 |
| Wokwi | Simulação e testes de circuitos quando necessário |
| Git | Controlo de versões |
| GitHub | Repositório do projeto e documentação |
| HTML | Estrutura do dashboard |
| CSS | Aspeto visual do dashboard |
| JavaScript | Comportamento e interação do dashboard |
| API REST | Comunicação entre o ESP32 e o servidor |
| MySQL | Armazenamento dos dados recolhidos |
| Backend / Servidor Web | Receção, processamento e disponibilização dos dados |

As tecnologias específicas utilizadas no backend e na componente de Inteligência Artificial ainda serão definidas durante o desenvolvimento.

## 11. Artefacto Físico

O artefacto físico do projeto será um pequeno veículo de duas rodas motrizes, construído sobre um chassis 2WD.

O ESP32 será instalado no veículo e funcionará como unidade principal de controlo. Este receberá informação dos sensores e controlará os motores e os diferentes atuadores.

Na parte frontal do veículo será instalado um sensor ultrassónico HC-SR04 para medir a distância a obstáculos.

Junto às rodas serão utilizados discos encoder e sensores óticos LM393, permitindo contar as rotações das rodas e calcular valores como velocidade e distância percorrida.

Depois de o núcleo funcional do veículo estar concluído, poderão ser adicionados LEDs para representar os sistemas de iluminação e um buzzer para representar a buzina, bem como outros componentes complementares que se revelem viáveis.

A disposição preliminar dos componentes será semelhante à seguinte:

```text
                 FRENTE DO VEÍCULO

                 [ HC-SR04 ]
                      │
                      │
              ┌───────────────┐
              │     ESP32     │
              │               │
              │   TB6612FNG   │
              └───────────────┘

       Sensor Ótico          Sensor Ótico
          LM393                 LM393
            │                     │
       Disco Encoder         Disco Encoder
            │                     │
         Motor E               Motor D
            │                     │
          Roda E                Roda D

               [ Alimentação ]

                 TRASEIRA

Componentes complementares:
LEDs, buzzer, sensor de luminosidade,
sensor de temperatura e outros extras.
```

Esta disposição é apenas uma representação preliminar. A posição final dos componentes poderá ser alterada durante a montagem, dependendo do espaço disponível no chassis e das necessidades das ligações elétricas.

O desenvolvimento físico será realizado de forma progressiva. Inicialmente serão testados separadamente o ESP32, LEDs, sensores e motores. Posteriormente, os componentes serão integrados no chassis até formar o protótipo completo.

## 12. Planeamento e Calendarização

O desenvolvimento do SmartVehicle será realizado de forma incremental. Cada fase deverá produzir uma parte funcional do sistema antes de avançar para a integração seguinte.

| Data / Período | Atividade / Entrega |
|---|---|
| 27/10/2026 | Proposta inicial do projeto e apresentação |
| 28/10 a 13/11/2026 | Definição dos requisitos funcionais e não funcionais |
| 14/11/2026 | Definição das funcionalidades, sensores e atuadores da componente IoT |
| Novembro | Testes individuais de ESP32, motores, sensores e atuadores |
| Novembro | Montagem do chassis e implementação do movimento básico |
| 30/11/2026 | Primeiro protótipo funcional integrando hardware e software |
| Dezembro | Implementação da comunicação Wi-Fi, servidor Web, API REST e MySQL |
| Dezembro | Desenvolvimento inicial do dashboard e recolha de telemetria |
| 18/12/2026 | Planeamento preliminar da componente de Inteligência Artificial |
| Início de janeiro de 2027 | Estrutura da base de dados e protocolo REST |
| Janeiro | Integração de sensores, dashboard, servidor e armazenamento de dados |
| Janeiro | Recolha e preparação de dados para Inteligência Artificial |
| 15/01/2027* | Plano e validação de testes |
| 29/01/2027 | Conclusão da componente de Inteligência Artificial |
| Segunda metade de janeiro | Integração final, correções, vídeo técnico, poster e vídeo promocional |
| 01/02/2027 | Entrega final e apresentação em Computação Física e IoT |
| 02/02/2027 | Apresentação final em Sistemas Distribuídos |

### Gráfico de Gantt

```mermaid
gantt
    title Planeamento do Projeto SmartVehicle
    dateFormat  YYYY-MM-DD
    axisFormat  %d/%m

    section Milestone 1
    Proposta inicial                     :2026-10-20, 2026-10-27

    section Engenharia de Software
    Requisitos                           :2026-10-28, 2026-11-13

    section IoT e Hardware
    Funcionalidades e sensores           :2026-10-28, 2026-11-14
    Testes individuais                   :2026-10-28, 2026-11-15
    Montagem do veículo base             :2026-11-05, 2026-11-22
    Protótipo hardware/software          :2026-11-15, 2026-11-30

    section Sistemas Distribuídos
    Wi-Fi e API REST                     :2026-12-01, 2026-12-20
    Servidor Web e MySQL                 :2026-12-01, 2027-01-09
    Dashboard e integração               :2026-12-10, 2027-01-15

    section Inteligência Artificial
    Planeamento do modelo                :2026-12-10, 2026-12-18
    Recolha e preparação de dados        :2026-12-15, 2027-01-17
    Desenvolvimento da componente IA     :2027-01-04, 2027-01-29

    section Testes
    Testes e validação                   :2026-12-15, 2027-01-15

    section Entrega Final
    Integração e correções               :2027-01-10, 2027-01-31
    Vídeo técnico e poster               :2027-01-18, 2027-01-31
    Entrega e apresentações              :2027-02-01, 2027-02-02
```

### Fases de Desenvolvimento

O projeto será dividido nas seguintes fases:

1. **Planeamento e investigação**  
   Definição do problema, funcionalidades, requisitos, arquitetura e componentes necessários.

2. **Aprendizagem e testes individuais**  
   Teste do ESP32 e de cada sensor ou atuador separadamente antes da montagem no veículo.

3. **Construção do veículo base**  
   Montagem do chassis, motores e controlador dos motores, permitindo avançar, recuar, virar e parar.

4. **Integração de sensores e sistemas do veículo**  
   Adição do sensor de obstáculos, encoders, iluminação, buzina e outros componentes.

5. **Comunicação e armazenamento de dados**  
   Ligação do ESP32 através de Wi-Fi ao servidor, utilização da API REST e armazenamento dos dados em MySQL.

6. **Dashboard digital**  
   Desenvolvimento da interface para controlo do veículo e visualização dos dados.

7. **Inteligência Artificial**  
   Preparação dos dados e desenvolvimento da componente analítica ou preditiva.

8. **Integração e testes finais**  
   Integração de todos os componentes, realização dos testes definidos e correção dos problemas encontrados.

## 13. Distribuição de Tarefas

A distribuição de tarefas será feita de forma colaborativa, procurando que todos os elementos participem no desenvolvimento e compreendam as diferentes partes do projeto.

Nesta fase, a distribuição preliminar é a seguinte:

| Elemento | Responsabilidades Principais |
|---|---|
| [Nome do elemento 1] | Planeamento do projeto, documentação, apoio à arquitetura e integração geral |
| [Nome do elemento 2] | Programação do ESP32, sensores e atuadores |
| [Nome do elemento 3] | Backend, API REST e base de dados MySQL |
| [Nome do elemento 4] | Dashboard, testes e apoio à componente de Inteligência Artificial |

Apesar desta divisão inicial, algumas tarefas serão realizadas em conjunto, principalmente:

- montagem e testes do protótipo físico;
- integração entre hardware e software;
- testes do sistema;
- documentação;
- preparação das apresentações;
- resolução de problemas durante o desenvolvimento.

A distribuição poderá ser ajustada ao longo do projeto, dependendo da evolução do trabalho, das dificuldades encontradas e da disponibilidade dos elementos do grupo.

## 14. Riscos do Projeto

Durante o desenvolvimento do SmartVehicle poderão surgir dificuldades técnicas e de organização. Os principais riscos identificados nesta fase são os seguintes:

| Risco | Impacto Possível | Medida de Mitigação |
|---|---|---|
| Atraso na chegada de componentes | Pode atrasar a montagem do protótipo | Utilizar Wokwi e testar antecipadamente o software sempre que possível |
| Dificuldades na programação do ESP32 | Pode atrasar a implementação das funcionalidades | Desenvolver e testar cada funcionalidade separadamente |
| Problemas de ligação entre componentes | Sensores, motores ou atuadores podem não funcionar corretamente | Testar individualmente cada componente antes da integração |
| Problemas de alimentação elétrica | Pode causar funcionamento instável ou danificar componentes | Confirmar tensões e ligações antes de alimentar o circuito |
| Problemas na comunicação Wi-Fi | Pode impedir a transmissão de dados e comandos | Testar primeiro a comunicação de forma simples antes de integrar o sistema completo |
| Dificuldades na integração entre ESP32, servidor, base de dados e dashboard | Pode provocar atrasos na fase de integração | Desenvolver e validar cada parte separadamente antes da integração final |
| Excesso de funcionalidades | Pode tornar o projeto demasiado complexo para o tempo disponível | Dar prioridade às funcionalidades essenciais e implementar extras apenas se existir tempo |
| Complexidade da componente de Inteligência Artificial | Pode dificultar a conclusão da integração final | Definir uma solução simples e adequada aos dados disponíveis |
| Falta de tempo para testes finais | Pode deixar erros por corrigir | Realizar testes ao longo de todo o desenvolvimento e não apenas no final |

Para reduzir estes riscos, o projeto será desenvolvido de forma incremental. Cada componente deverá ser testado individualmente antes de ser integrado no sistema completo.

As funcionalidades essenciais terão prioridade sobre funcionalidades adicionais. Desta forma, pretende-se garantir primeiro um protótipo funcional e só depois acrescentar novas capacidades.

## 15. Conclusão

O SmartVehicle pretende integrar, num único projeto, diferentes áreas da Engenharia Informática através do desenvolvimento de um pequeno veículo inteligente conectado.

O projeto combina hardware, sensores, atuadores, programação, comunicação através de Wi-Fi, armazenamento de dados, desenvolvimento de software e Inteligência Artificial.

A solução será desenvolvida de forma progressiva, começando pelas funcionalidades essenciais do veículo e evoluindo posteriormente para a comunicação com o servidor, armazenamento em base de dados, dashboard digital e componente de Inteligência Artificial.

Nesta fase inicial foram definidos o conceito do projeto, os principais objetivos, a arquitetura preliminar, as tecnologias previstas, o artefacto físico e o plano de desenvolvimento.

As próximas fases serão dedicadas à implementação e teste dos diferentes componentes, procurando garantir primeiro um protótipo simples e funcional antes da introdução de funcionalidades adicionais.
