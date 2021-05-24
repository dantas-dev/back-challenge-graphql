## GRAPHQL - Challenge

### Technologies used

[ ] - Node with TypeScript
[ ] - TypeORM
[ ] - GraphQL
[ ] - Type-Graphql
[ ] - ApoloServer
[ ] - Postgres or MySQL
[ ] - uuid

### Setup Project

Please include a `INSTRUCTIONS.md`:

- Setup instructions
- How did you decide which technologies to use as part of your solution
- Are there any improvements you could make to your submission
- What would you do differently if you were allocated more time

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
