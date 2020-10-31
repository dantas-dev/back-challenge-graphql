<h1 align="center">🔎 Instructions</h1>

<h3 align="center">
  Challenge - Create project's
</h3>

<p align="center">
  <a href="#hammer-setup-instructions">🔨 Setup Instructions</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#electric_plug-technologies">🔌 Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#wrench-improvements">🔧 Improvements</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#bulb-future-features">💡 Future features</a>&nbsp;&nbsp;&nbsp;
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Apollo%20server-%5E2.18.2-red" />
  <img src="https://img.shields.io/badge/Express-%5E4.17.1-brightgreen" />
  <img src="https://img.shields.io/badge/GraphQL-%5E15.3.0-yellow" />
  <img src="https://img.shields.io/badge/Node.js-%5E12.18.4-green" />
  <img src="https://img.shields.io/badge/Typescript-%5E4.0.5-blue" />
  <img src="https://img.shields.io/badge/TypeORM-%5E0.2.28-orange" />
</p>

---

## :hammer: Setup instructions

To be able to run the project, it is necessary that:

<details>
  <summary>Create file <i>.env</i></summary>

  <p>
    Create the <i>.env</i> file, with the same contents as the <i>.env.example</i> file. Updating the value of the <i>NODE_ENV</i> environment variable for <b><i>development</i></b>.
  </p>
</details>

<details>
  <summary>Create file <i>ormconfig.json</i></summary>
  <p>
    When creating the <i>ormconfig.json</i> file, copy the contents of the <i>ormconfig.example.json</i> file.
  </p>

  <p>
    This file is responsible for configuring our connection to the database, so, before refactoring, create your postgres database and refactor the fields: <i>username</i>, <i>password</i> and <i>database</i>.
  </p>
</details>

<br />

Run the commands below:

```bash
# Install the dependencies
$ yarn

# Use the script to run the migrations
$ yarn typeorm migration:run

# To finish, run the api service
$ yarn dev

# Well done, project is started!

# Access playground url
🚀 Server is running http://localhost:4000/graphql
```

---

## :electric_plug: Technologies

Technologies that I used to develop this application

- [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
- [Express.js](https://expressjs.com/)
- [GraphQL](https://graphql.org/)
- [Node.js](https://nodejs.org/en/)
- [TypeORM](https://typeorm.io/#/)
- [TypeScript](https://www.typescriptlang.org/)

---

## :wrench: Improvements

- [x] Separating responsibility for each domain `projects` and `users`, applying DDD:
  - [x] Add layer `graphql`;
  - [x] Add layer`infra`;
  - [x] Adds layer `repositories`;

- [x] Adds shareable layer `shared`;

- [x] `Eslint`, `prettier` and `editorconfig` have been added, so that it has a ready-made style, as well as for other developers that do not have `VSCode`, to inherit these same settings;

---

## :bulb: Future features

- Create deadline for the project;
- Create tags of projects;
- Tag filters;
- Update user information;
- Update project information;
- Create authentication flow;
- Create middleware of authenticate;

---

Made with :purple_heart: by Daniel Felizardo 👋 [See my linkedin](https://www.linkedin.com/in/daniel-felizardo/)
