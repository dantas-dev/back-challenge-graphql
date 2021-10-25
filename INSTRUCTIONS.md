# 👾 Back-End challenge - Graphql API
<a href="https://codeclimate.com/github/uigormarshall/back-challenge-graphql/maintainability"><img src="https://api.codeclimate.com/v1/badges/a1a4ebac5cb05a45735b/maintainability" /></a>
<a href="https://codeclimate.com/github/uigormarshall/back-challenge-graphql/test_coverage"><img src="https://api.codeclimate.com/v1/badges/a1a4ebac5cb05a45735b/test_coverage" /></a>

## Instruções para setup
1. Clone o repositório:
  * `git clone git@github.com:uigormarshall/back-challenge-graphql.git`
  * Entre no diretório do repositório:
    * `cd back-challenge-graphql`
  * Mude para a branch SR-uigor:
    * `git checkout SR-uigor`

2. Intalação de dependências
  * Instale as dependências:
    * `npm install`

3. Configuração do banco de dados
  * Faça uma copia do .env-example e renomeie para .env:
    * `cp .env-example .env`
  * em seguida edite os atributos do arquivo para seu bando banco de dados mysql:
  ```bash
    DB_HOST=seuHost
    DB_PORT= suaPorta
    DB_USERNAME=seuUsuario
    DB_PASSWORD=suaSenha
    DB_DATABASE=seuDatabase
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

Para o projeto decide usar um framework que fosse solido e bem documentado, visando a facilidade de contratação, treinamento e até mesmo de conversão de desenvolvedores frontend para backend. 

## Possíveis melhorias
- Definir um formato de resposta padrão.
- Criação de um modelo de validações.
- Definir melhor a modelagem dos relacionamentos.
- adicionar uma pipeline para validar os testes/features
