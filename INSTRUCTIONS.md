# Get Started

1. After you cloned this repository, make sure you have all it's necessary to run it. The API uses a postgres database to persist data, so you may need it install on your machine or use a docker image to run it.

2. Now it's time to install all the project dependencies. To do that run on your terminal the follow command:

```bash
$ yarn
```

3. Now you may need to create a `.env` file with the follow variables to run it on your database:

```
DB_HOST
DB_USER
DB_PASSWORD
DB_PORT
DEV_DB
PORT
```

4. After define the database options on the `.env` file, now it's time for the migration. This project uses TypeORM and with the follow command you can run then:

```bash
$ yarn typeorm migration:run
```

Make sure you have properly created all the following tables on your database:

```txt
+-------------+--------------+----------------------------+
|                          users                          |
+-------------+--------------+----------------------------+
| id          | uuid         | PRIMARY KEY                |
| name        | varchar      |                            |
| email       | varchar      |                            |
+-------------+--------------+----------------------------+

+-------------+--------------+----------------------------+
|                         projects                        |
+-------------+--------------+----------------------------+
| id          | uuid         | PRIMARY KEY                |
| name        | varchar      |                            |
| price       | int4         |                            |
| user_id     | varchar      | KEY FOREIGN KEY            |
| deadline    | timestamp    |                            |
| created_at  | timestamp    |                            |
+-------------+--------------+----------------------------+
```

5. Now it's time to run the application. Type this on your terminal:

```bash
$ yarn dev
```

You should see the following message on your terminal also. If so, now just follow the link to your navigator to check if it's working.

```bash
Database successfully initialized!
Server is running on http://localhost:4000/graphql
```

# Queries and Mutation

In this project some liberty were taken to create aditional fields to the queries, mutations and types. Here we have all of then listed:

## Types

The `project` is related to user in a Many-to-One relation, therefore, a user can create multiple projects, but a project com only have one user. The `project` time now also have a `deadline` and a `createdAt`. 

```graphql
type Project {
  createdAt: DateTime!
  deadline: DateTime!
  id: String!
  name: String!
  price: Float!
  user: User!
}

type User {
  email: String!
  id: String!
  name: String!
}
```

## Inputs

To create a new `project`is necessary to give it a name, price, deadline and a user id. A user can not have two projects with the same name.

```graphql
input CreateProjectInput {
  deadline: DateTime!
  name: String!
  price: Float!
  userId: String!
}

input CreateUserInput {
  email: String!
  name: String!
}
```

## Queries

The queries for both `project` and `user` can be filtered by `name`/`price` or `name`/`email`, respectively. A pagination scheme is also provided by the arguments `skip` and `take`. 

```graphql
type Query {
  listProjects(name: String, price: Int, skip: Int = 0, take: Int = 25): [Project!]!
  listUsers(email: String, name: String, skip: Int = 0, take: Int = 25): [User!]
}
```

## Mutations

```graphql
type Mutation {
  createProject(ProjectInput: CreateProjectInput!): Project!
  createUser(UserInput: CreateUserInput!): User!
}
```

# Using Exemples

## Creating a new user

```graphql
mutation {
  createUser(
    UserInput: {
    	name: "Joao"
      email: "joao@gmail.com"
    }){
    id
    name
    email
  }
}
```

## Listing the first 5 users named "Carlos"

```graphql
query {
  listUsers(
    name: "Carlos"
    take: 5
  ){
    id
    name
    email
  }
}
```

## Creating a new project

```graphql
mutation {
  createProject(
    ProjectInput: {
    	name: "Projeto 3"
     	price: 16
      userId: "1c837c36-4bd3-46ea-9e6a-765d4bd3899b"
      deadline: "2022-11-10"
    }){
    createdAt
    user{
      id
      name
    }
  }
}
```

## Listing all projects 

```graphql
query {
  listProjects{
    id
    name
    price
    deadline
    user {
      name
    }
  }
}
```