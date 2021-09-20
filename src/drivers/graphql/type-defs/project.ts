import { gql } from 'apollo-server-express'

export default gql`
  extend type Query {
    projects: [Project!]!
  }

  extend type Mutation {
    createProject (name: String!, price: Float!, userId: Int!): Project!
  }

  type Project {
    id: Int!
    name: String!
    price: Float!
    user: User!
  }


`
// (limit: Int, offset: Int, name: String, id: Int)
