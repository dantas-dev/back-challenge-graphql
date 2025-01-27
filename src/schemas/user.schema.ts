import { gql } from "apollo-server";

export const typeDefsUser = gql`
    type User {
        id: Int!
        name: String!
        email: String!
    }

    type Query {
        users: [User!]!
        filterUserById(id: Int!): User!
        filterUsersByName(name: String!): [User!]!
    }

    input CreateUser {
        name: String!
        email: String!
    }

    type Mutation {
        createUser(input: CreateUser!): User!
    }
`