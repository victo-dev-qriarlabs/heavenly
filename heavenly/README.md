# Heavenly

## Visão Geral

Este documento descreve a estrutura de pastas do projeto, explicando a finalidade de cada diretório. A organização do projeto segue a arquitetura MVC (Model-View-Controller) para manter o código bem estruturado e fácil de manter.

## Estrutura de Diretórios

A estrutura de diretórios do projeto é organizada da seguinte maneira:

heavenly/  
├── node_modules/  
├── public/  
├── src/  
│ ├── controllers/  
│ ├── model/  
│ ├── routes/  
│ ├── services/  
│ ├── utils/  
│ └── view/  
│ ├── components/  
│ ├── pages/  
│ ├── styles/  
│ └── assets/  
├── .gitignore  
├── package.json  
├── README.md  
└── ...  


### Descrição dos Diretórios


## Descrição das Pastas

### `controllers/`
- **Utilidade**: Esta pasta contém a lógica de controle do aplicativo. Os controladores são responsáveis por manipular a entrada do usuário e interagir com os modelos. Eles atuam como intermediários entre os modelos e as visualizações.

### `model/`
- **Utilidade**: Esta pasta contém a lógica de dados e de negócios do aplicativo. Os modelos representam os dados e as regras de negócios da aplicação, incluindo a interação com bancos de dados.

### `routes/`
- **Utilidade**: Esta pasta contém a configuração das rotas do aplicativo. As rotas definem quais páginas são chamadas com base nos URLs acessados.

### `services/`
- **Utilidade**: Esta pasta contém serviços que realizam operações não diretamente relacionadas à interface do usuário, como interações com APIs externas, autenticação e outras operações de lógica de negócios que não se enquadram diretamente em modelos ou controladores.

### `utils/`
- **Utilidade**: Esta pasta contém funções utilitárias e helpers que são reutilizados em diferentes partes do aplicativo. Estes utilitários ajudam a evitar a duplicação de código e a manter o código limpo e organizado.

### `view/`
- **Utilidade**: Esta pasta contém toda a interface do usuário do aplicativo. Ela é subdividida em:
  - **`components/`**: Contém componentes reutilizáveis da UI. Estes são blocos de construção independentes que podem ser usados em várias partes da aplicação.
    - **Exemplo**: `Header.js`, `Footer.js`
  - **`pages/`**: Contém as diferentes páginas do aplicativo. Cada página é composta por vários componentes e representa uma tela ou vista específica.
    - **Exemplo**: `HomePage.js`, `AboutPage.js`
  - **`styles/`**: Contém arquivos de estilo CSS usados para estilizar os componentes e páginas do aplicativo.
    - **Exemplo**: `App.css`, `index.css`
  - **`assets/`**: Contém arquivos estáticos como imagens e fontes que são utilizados na aplicação.
    - **Exemplo**: `images/`, `fonts/`

## Stack Utilizada

### IDE:
- **Visual Studio Code (VSCode)**: Ambiente de Desenvolvimento Integrado utilizado para escrever e gerenciar o código do projeto.
  - **Versão**: Última versão disponível no site oficial.

### Front-End:
- **React**: A biblioteca principal utilizada para a construção da interface do usuário.
  - **Versão**: 18.3.1
- **Tailwind CSS**: Utilizado para estilização rápida e eficiente dos componentes.
  - **Versão**: V3.4.4
- **Bootstrap**: Utilizado para componentes prontos e layouts responsivos.
  - **Versão**: V5.1.3
- **HTML**: Linguagem de marcação utilizada para estruturar o conteúdo na web.
  - **Versão**: HTML5
- **CSS**: Folhas de estilo em cascata utilizadas para estilizar o HTML.
  - **Versão**: CSS3
- **Git**: Sistema de controle de versão distribuído.
  - **Versão**: 2.45.2

### Back-End:
- **Node.js**: Plataforma para execução do JavaScript no lado do servidor.
  - **Versão**: v20.16.0 (current)

### Linguagens de Programação:
- **JavaScript**: Linguagem principal utilizada tanto no front-end quanto no back-end.
  - **Versão**: ES6+

## Executando o Projeto

Siga os passos abaixo para configurar e executar o projeto em sua máquina local.

### Pré-requisitos

Certifique-se de ter o Node.js e o npm (Node Package Manager) instalados em sua máquina. Você pode baixá-los e instalá-los a partir do [site oficial do Node.js](https://nodejs.org/).

### Instalação

1. Clone o repositório do projeto:
   ```sh
   git clone https://github.com/seu-usuario/heavenly.git

2. Navegue até o diretório do projeto:
   ```sh
   cd heavenly

3. Instale as dependências do projeto:
   ```sh
   npm install

4. Inicie o servidor de desenvolvimento:
   ```sh
   npm start

5. Abra seu navegador e acesse:
   ```sh
   http://localhost:3000
   