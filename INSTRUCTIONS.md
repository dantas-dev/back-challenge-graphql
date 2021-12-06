# Setup instructions

## NodeJS general notes

- Before starting up, you must install the project dependencies. To do this:

  - Make sure you have NodeJS installed on your machine
  - You can use the built in node package manager (NPM) or yarn.
    - If using NPM, type: "npm install"
    - If using Yarn, type: "yarn"

- To run the api:

  - If using NPM: "npm run dev"
  - If using Yarn: "yarn dev"

- To run tests:
  - If using NPM: "npm test"
  - If using Yarn: "yarn test"

## Database

- MySQL version used: 8.0.27 (https://dev.mysql.com/downloads/mysql/)
- This version provides a feature for auto generating UUIDs, which I used in this project. Older versions may not contain this feature.

- MySQL database must be configured as follows:

  - host: localhost
  - port: 3306
  - username: root
  - password: mysql
  - database name: challenge_graphql

  Futher information can be found on file "ormconfig.json" on project root folder. Any necessary changes for database access must be done on this file.

- Before running the migrations, mysql must be installed on local machine and the following commands must be executed:

  - ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'mysql';
  - flush privileges;
    An error "Client does not support authentication protocol requested by server; consider upgrading MySQL client" might appear if the above steps are not executed.

- To run the migrations:

  - If using NPM: "npm run typeorm migration:run"
  - If using Yarn: "yarn typeorm migration:run"

## Server

- I used the library graphql-yoga, which has an integrated "playground".
- After running the script "dev" as described above, open your browser and type "http://localhost:4000". You can then start calling the API via GraphQL.

# How did you decide which technologies to use as part of your solution?

- Used library graphql-yoga, which uses apollo server and express under the hood, and has an integrated "playground" that facilitates api call tests.
- Used eslint extension to check syntax and enforce code style
- Used prettier extension to enfore code formatting patterns
- Used TypeORM instead of Sequelize. In my opinion, TypeORM has a better fit for Typescript than Sequelize. You can check out typeorm here: https://typeorm.io/
- Used Yarn package manage instead of NPM, as Yarn has a better performance. You can check out yarn here: https://yarnpkg.com/
- Used some SOLID concepts, as dependency inversion, single resposibility and interface segregation principles.
- Also used some classic GOF design patterns, such as singleton.

# Are there any improvements you could make to your submission?

and

# What would you do differently if you were allocated more time?

- Would wrap the "createProjects" mutation into a transaction, to ensure it will only be created with an associated user.
- Would use some GraphQL library to build schemas and resolvers, such as graphql-tools.
