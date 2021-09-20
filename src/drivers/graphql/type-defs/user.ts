import { gql } from 'apollo-server-express'

export default gql`
  extend type Query {
    users(limit: Int, offset: Int, name: String, id: Int): [User!]!
  }

  extend type Mutation {
    createUser (name: String!, email: String!): User!
  }

  type User {
    id: Int!
    name:  String!
    email: String!
  }
`
