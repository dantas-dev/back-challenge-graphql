# graphql_sequelize

Esta é uma API feita com graphql. 
Lembre-se de estar com uma versão atual do NODE.JS, nesse momento é "16.13.1", pois algumas dependências podem não ser compatíveis com as versões mais antigas.

# Instalar as dependências

No terminal de comando acesse a pasta do projeto e execute o seguinte comando para instalar as dependências:

      -> yarn 
         ou
      -> npm i

# Configurando o arquivo .ENV

Como trata-se de um arquivo que contêm as variaveis de ambiente, normalmente não são enviados os dados delas, pois eles devem ser configurado na maquina local que executará a API, então basta criar o arquivo .env conforme o arquivo .env.example e "setar" os valores das variaveis ali descritas.
EX:


ARQUIVO .env

  SECRET_TOKEN=asdf123asdf987
  
  EXPIRESIN=2d
  
  DATABASE_USERNAME=root
  
  DATABASE_PASSWORD=123456
  
  DATABASE_HOST=localhost



# Criando o BANCO DE DADOS


Para criar o banco de dados e depois criar as tabelas por meio das MIGRATIONS, acesse pelo terminal de comnado a pasta do projeto/API e excute os seguintes comandos:

-> yarn sequelize db:create (Comando que cria o banco de dados)

-> yarn sequelize db:migrate (Comando que executará as migrations e criará as tabelas no banco)

Antes de executar esses comando execute os serviços do banco de dados Mysql. E execute após as instalações das dependências.



# Executando a API

Para executar e utilizar a API, agora basta acessar a pasta da API/projeto pelo terminal de comando e executar o script "DEV", conforme os comandos abaixo:

-> yarn dev

    ou
    
    
-> npm run dev

Agora acesse http://localhost:4000/ no navegador e utilize a API com graphql.
Antes de executar a API lembre-se de realizar todos os passos de configuração descritos anteriormente.



# Tecnologias, Bibliotes e Dependências utilizadas


Para a criaçao dessa API com GRAPHQL e MYSQL foi utilizada algumas dependências como:

-> apollo-server => Para ser possível utilizar o GRAPHQL, além de outras dependência que auxiliam na execução como "graphql-tools", "@graphql-tools/load-files"

-> bcrypt => Uma biblioteca que é utilizada para criptografar as senhas do usuário e descriptografa-las quando o mesmo realiza o login

-> dotenv => Para a crição de variaveis de ambiente.

-> jsonwebtoken => Para criação e gerenciamento do token dos usuario logados

-> sequelize => ORM para realizar as operações com a base de dados. 


# Melhorias Possíveis, O que eu faria se tivesse mais tempo?

Sempre é possível melhorar, mas com maior tempo eu adicionaria um controle maior e mais validações dos campos, utilizaria o typescript, pois não tive o tempo de criar a API com o typescript por não ter tido ainda a oportunidade de trabalhar com o mesmo, então optei por não usa-lo para ser mais rapido devido ao prazo de entrega.
