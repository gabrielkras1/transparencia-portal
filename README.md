Transparência Portal

Este projeto é uma aplicação web desenvolvida em React que simula um mini portal de transparência. Ele permite aos usuários visualizar dados públicos, como listas de projetos e informações resumidas, aplicando boas práticas de desenvolvimento front-end, como componentização, gerenciamento de estado e consumo de API.

Funcionalidades

O portal oferece as seguintes funcionalidades principais:

•
Página Inicial (Home): Um painel intuitivo que exibe um resumo dos dados, incluindo o total de despesas e o número de projetos ativos.

•
Listagem de Dados: Uma página dedicada para exibir dados detalhados de projetos em formato de tabela, permitindo uma visualização clara e organizada.

•
Filtros e Busca: Capacidade de buscar projetos por nome e filtrar por categoria, facilitando a localização de informações específicas.

•
Configurações do Usuário: Uma área onde o usuário pode personalizar a experiência da aplicação, como alternar entre o tema claro e o tema escuro.

Requisitos Técnicos Atendidos

O projeto foi desenvolvido seguindo os seguintes requisitos técnicos obrigatórios:

•
Consumo de API (Axios): Utilização da biblioteca axios para realizar requisições a uma API externa (simulada localmente com db.json). Implementação de tratamento de estados de carregamento, sucesso e erro para uma experiência robusta.

•
Gerenciamento de Estado Global (Context API): Implementação de um ThemeContext para gerenciar o modo claro/escuro da aplicação globalmente, demonstrando o uso eficaz da Context API do React.

•
React Hooks: Uso extensivo de useState para gerenciar estados locais (como inputs de formulário, dados de busca e estados de UI) e useEffect para disparar chamadas de API e gerenciar efeitos colaterais, como a persistência do tema no localStorage.

•
Roteamento (React Router DOM): Configuração de múltiplas rotas (/, /dados, /configuracoes) utilizando react-router-dom, garantindo uma experiência de Single Page Application (SPA) com navegação fluida sem recarregar a página.

Tecnologias Utilizadas

•
React: Biblioteca JavaScript para construção de interfaces de usuário.

•
Vite: Ferramenta de build rápida para projetos web modernos.

•
Axios: Cliente HTTP baseado em Promises para o navegador e Node.js.

•
React Router DOM: Biblioteca para roteamento declarativo em aplicações React.

•
JavaScript (ES6+): Linguagem de programação principal.

•
CSS: Para estilização e temas (claro/escuro).

Pré-requisitos

Para executar este projeto, você precisará ter instalado em sua máquina:

•
Node.js (versão 14 ou superior)

•
npm ou Yarn (gerenciador de pacotes)

Instalação e Execução

Siga os passos abaixo para configurar e executar o projeto localmente:

1.
Clone o repositório:

Bash


git clone https://github.com/gabrielkras1/transparencia-portal.git
cd transparencia-portal





2.
Instale as dependências:

Bash


npm install
# ou
yarn install





3.
Inicie o servidor de desenvolvimento:

Este projeto utiliza um arquivo db.json para simular uma API. Para que a aplicação funcione corretamente, você precisará iniciar um servidor JSON. Uma maneira fácil de fazer isso é usando json-server.

Primeiro, instale o json-server globalmente (se ainda não o tiver ):

Bash


npm install -g json-server
# ou
yarn global add json-server



Em seguida, inicie o servidor JSON no diretório raiz do projeto:

Bash


json-server --watch db.json --port 4000



Mantenha este terminal aberto. Em um novo terminal, inicie a aplicação React:

Bash


npm run dev
# ou
yarn dev





4.
Acesse a aplicação:

Abra seu navegador e navegue para http://localhost:5173 (ou a porta indicada pelo Vite ).



Estrutura do Projeto

Plain Text


transparencia-portal/
├── public/
├── src/
│   ├── api/
│   │   └── api.js
│   ├── assets/
│   ├── components/
│   │   ├── DataList.jsx
│   │   ├── DataTable.jsx
│   │   ├── Filters.jsx
│   │   ├── Header.jsx
│   │   ├── Home.jsx
│   │   ├── Loading.jsx
│   │   └── Settings.jsx
│   ├── contexts/
│   │   └── ThemeContext.jsx
│   ├── styles/
│   │   └── global.css
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── db.json
├── index.html
├── package-lock.json
├── package.json
└── vite.config.js



Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.


Autor

Gabriel Kras




