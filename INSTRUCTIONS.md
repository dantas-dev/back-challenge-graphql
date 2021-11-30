# 👾 Back-End challenge - Graphql API

## Instruções para setup
1. Clone o repositório:
  * `git clone https://github.com/thiagotesla/back-challenge-graphql.git`
  * Entre no diretório do repositório:
    * `cd back-challenge-graphql`
  * Mude para a branch JR-thiagobarros:
    * `git checkout JR-thiagobarros`

2. Intalação de dependências
  * Instale as dependências:
    * `npm install`

3. Configuração do banco de dados
  * Faça uma copia do .env-example e renomeie para .env:
    * `cp .env-example .env`
  * em seguida edite os atributos do arquivo para seu bando banco de dados mysql:
  ```bash
    DB_HOST=
    DB_PORT=
    DB_USERNAME=
    DB_PASSWORD=
    DB_DATABASE=
  ```
  * para rodar as migrations use o comando abaixo:
  ```bash
  npx sequelize-cli db:migrate
  ```
    
4. Rodadando a aplicação
```bash
# desenvolvimento
$ npm run start

# modo watch
$ npm run start:dev

# produção
$ npm run start:prod
```

4. Rodando os testes

```bash
# testes unitário
$ npm run test

# testes de cobertura
$ npm run test:cov
```
## Tecnologias
-  [NestJs](https://nestjs.com/)
-  [Sequelize](https://nestjs.com/)
-  [JestJs](https://jestjs.io/pt-BR/)

Decidi utilizar o nestjs por ser o framework que já venho estudando e conhecendo, além de ser uma ferramenta de fácil aprendizagem é, também, muito aceito no mercado.


## Possíveis melhorias
Acredito que seria interessante adicionar uma query "users" que entregue os "projects" dos usuários.