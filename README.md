# 👾 Back-End challenge - Graphql API
This is a quick coding challenge we designed to assess your qualifications as a potential back-end developer. It's important to note that this is by no means a test. We just want to get a sense of how you write code and solve problems.

## Getting started
To get started with this challenge: 
1) Clone this repository.
2) Create the database container with ``docker-compose up``
3) Run ``yarn`` in terminal to install project dependencies
4) Run ``yarn start:dev`` to start the application

## The Challenge
We'll be looking for **simple, well-designed and tested(only PL/SR)** code in the submission.

Please include a ``INSTRUCTIONS.md``:
- Setup instructions
- How did you decide which technologies to use as part of your solution
  - I was informed that the company is evaluating NestJS, TypeORM and GraphQL, so I solved the implementation of the challenge using these technologies.

- Are there any improvements you could make to your submission
  - As I'm new to GraphQL I think I could evaluate the Schema First approach and have more control using resolvers and services, although NestJS makes development in the Code First approach much easier.

- What would you do differently if you were allocated more time
  - I would study more NestJS and GraphQL in order to use all the features of the frameworks

## Details
- Create a Node Graphql API based on the queries and mutations below.
- Feel free to choose the way that you will pass the input data (queries and mutations)
- Use your creativity to improve what you want.

### Queries
#### Projects: List all projects
<details><summary>Query Details</summary>

<p>
  
```graphql
query projects {
  id
  name
  price
  user {
    id
    name
    email
  }
}
```

</p>
</details>

#### Users: List all users
<details><summary>Query Details</summary>

<p>
  
```graphql
query users {
  id
  name
  email
}
```

</p>
</details>

### Mutations
#### CreateUser: create a user
<details><summary>Mutation Details</summary>

<p>
  
```graphql
mutation createUser {
  id
  name
  email
}
```

</p>
</details>

#### CreateProject: create a project
<details><summary>Mutation Details</summary>

<p>
  
```graphql
mutation createProject {
  id
  name
  email
  user {
    id
    name
    email
  }
}
```

</p>
</details>

## Required
- Node,Typescript and Graphql with a DB of your choose.
- Migrations
- Pagination and Filters (example: by ID and name)
- TDD (only PL/SR)

## Desirable
- Apollo
- Sequelize with MySQL
- Clean Architecture, Design Patterns and SOLID
