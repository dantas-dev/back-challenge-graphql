# Minha Api em Graphql

<br>

## Instruções

1. Instale [NodeJS](https://nodejs.org/pt)

2. Instale o yarn
    ```bash
    npm install -g yarn 
    ```

3. Clone o repositório
    ```bash
    git clone https://github.com/LeonardoMelloTrindade/back-challenge-graphql.git
    ```

4. Instale as dependências na raiz do projeto
    ```bash
    yarn install
    ```

5. Inicie o projeto
    ```bash
    yarn dev
    ```

6. Crie o banco de dados
    ```bash
    yarn db:create
    ```

7. Crie as tabelas
    ```bash
    yarn db:migrate
    ```

## Como é que decidi quais tecnologias usar?

Escolhi as tecnologias que estou mais acostumado como o mysql sendo o banco de dados

## O que é que eu faria de diferente se me fosse atribuído mais tempo?

Eu adicionaria tratamento de erro nos resolvers e gostaria de estudar mais sobre graphql, foi meu primeiro projeto usando ele, foi um ótimo desafio, e adicionaria a paginação que ficou faltando