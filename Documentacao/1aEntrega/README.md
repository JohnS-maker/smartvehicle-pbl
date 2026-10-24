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
- Gonçalo Pereira - 20241565;

**Unidades Curriculares envolvidas:**
- Sistemas Distribuídos
- Computação Física e IoT
- Inteligência Artificial
- Engenharia de Software

**Palavras-chave:** ESP32, IoT, SmartVehicle, sensores, atuadores, telemetria, dashboard digital, sistemas distribuídos, inteligência artificial.

**Repositório GitHub:** [colocar aqui o link do repositório]

## 2. Descrição do Projeto

O SmartVehicle é um protótipo de um pequeno veículo inteligente baseado no microcontrolador ESP32.

O objetivo é construir um veículo físico capaz de se movimentar, utilizar sensores e executar algumas funções semelhantes às existentes num automóvel moderno.

O veículo deverá conseguir avançar, recuar, virar e parar. Pretende-se também implementar funcionalidades como faróis, piscas, buzina, medição de velocidade e deteção de obstáculos.

Será desenvolvido um dashboard digital que permitirá controlar o veículo e visualizar informação sobre o seu funcionamento, como velocidade, distância a obstáculos e estado de alguns dos seus sistemas.

O ESP32 será responsável pelo controlo do veículo e pela recolha de dados dos sensores. Esses dados serão enviados através de Wi-Fi para um servidor, onde poderão ser armazenados numa base de dados e utilizados pelo dashboard e pela componente de Inteligência Artificial.

O projeto será desenvolvido de forma progressiva, começando pelas funções mais simples do veículo e acrescentando posteriormente sensores, comunicação, dashboard e outras funcionalidades.

## 3. Problema e Motivação

Os automóveis modernos utilizam vários sistemas eletrónicos que trabalham em conjunto, como sensores, unidades de controlo, sistemas de iluminação, medição de velocidade, deteção de obstáculos e comunicação entre diferentes componentes.

O SmartVehicle pretende criar uma versão simplificada deste tipo de sistema, utilizando um pequeno veículo físico e componentes de baixo custo.

A escolha deste projeto permite aplicar, num único protótipo, conhecimentos de hardware, programação, Internet of Things, Sistemas Distribuídos, Engenharia de Software e Inteligência Artificial.

Outra motivação é trabalhar com dados reais recolhidos pelos sensores do veículo. Esses dados poderão ser transmitidos, armazenados e posteriormente utilizados pelo dashboard e pela componente de Inteligência Artificial.

O projeto também permite desenvolver a solução de forma progressiva, começando por funcionalidades básicas e acrescentando novas capacidades à medida que o desenvolvimento avança.

## 4. Objetivos

O principal objetivo do SmartVehicle é desenvolver um pequeno veículo conectado, baseado em ESP32, capaz de ser controlado através de um dashboard digital e de recolher dados do seu funcionamento através de sensores.

Como objetivos específicos, pretende-se:

- controlar o movimento do veículo;
- permitir avançar, recuar, virar e parar;
- controlar a velocidade dos motores;
- medir a distância a obstáculos;
- medir a velocidade das rodas através de encoders;
- implementar sistemas de iluminação, como faróis e piscas;
- implementar uma buzina;
- enviar dados do veículo através de Wi-Fi;
- armazenar os dados recolhidos num servidor e numa base de dados;
- apresentar a informação num dashboard digital;
- utilizar os dados recolhidos numa componente de Inteligência Artificial;
- desenvolver o projeto de forma modular e progressiva.

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

### Guião de Teste 3 – Iluminação do Veículo

**Objetivo:**  
Verificar se os sistemas de iluminação respondem aos comandos do utilizador.

**Passos:**

1. Ligar o SmartVehicle.
2. Abrir o dashboard.
3. Ativar os faróis.
4. Confirmar que os LEDs correspondentes aos faróis acendem.
5. Ativar o pisca esquerdo.
6. Confirmar que o indicador luminoso esquerdo pisca.
7. Desativar o pisca esquerdo.
8. Ativar o pisca direito.
9. Confirmar que o indicador luminoso direito pisca.
10. Desligar os sistemas de iluminação.

**Resultado esperado:**  
As luzes deverão responder corretamente aos comandos enviados pelo utilizador.

## 7. Enquadramento nas Unidades Curriculares

## 8. Requisitos Técnicos e Tecnologias

## 9. Arquitetura da Solução

## 10. Hardware e Software

## 11. Artefacto Físico

## 12. Planeamento e Calendarização

## 13. Distribuição de Tarefas

## 14. Riscos do Projeto

## 15. Conclusão
