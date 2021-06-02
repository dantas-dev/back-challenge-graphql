# Instruções de configuração

## Como você decidiu quais tecnologias usar como parte de sua solução

## Você poderia fazer alguma melhoria em seu envio?

## O que você faria de diferente se tivesse mais tempo

criar paths no tsconfig.json

criar as requisições de BD para enviar ao Mysql
npx sequelize model:create --name User --attributes id:integer,name:string,email:string
npx sequelize model:create --name Project --attributes name:string,price:double,userId:integer

enviar as alterações de BD para o Mysql
npx sequelize db:migrate

voltar a última requisição do migrate
npx sequelize db:migrate:undo

criar conteúdo de DB de testes para enviar ao mysql
npx sequelize seed:generate --name users

enviar conteúdo de DB de testes para o mysql
npx sequelize db:seed:all

ainda falta acertar o subnivel na query e as mutações.
