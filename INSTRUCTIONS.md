# :mag: Instructions

## :scroll: Table of contents

- [:hammer: Setup instructions](#wrench-setup-instructions)
- [:electric_plug: Technologies](#electric_plug-technologies)
- [:wrench: Improvements](#hammer-improvements)
- [:bulb: Future features](#bulb-future-features)

---

## :hammer: Setup instructions

To be able to run the project, it is necessary that:

<details>
  <summary>Install the project dependencies</summary>

  <p>Run the following command:</p>

  ```sh
  $ yarn
  ```
</details>

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

<details>
  <summary>Run the project migrations</summary>

  <p>Run the following command:</p>

  ```sh
  $ yarn typeorm migration:run
  ```
</details>

<details>
  <summary>Run in development mode</summary>

  <p>Run the following command:</p>

  ```sh
  $ yarn dev:server
  ```

  <p>The output must contain the following content:</p>

  ```sh
  🚀 Server is running http://localhost:4000/
  ```
</details>

---

## :electric_plug: Technologies

---

## :wrench: Improvements

---

## :bulb: Future features

---

>Created by Daniel Felizardo :purple_heart::rocket:
