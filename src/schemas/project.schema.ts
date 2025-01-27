import { gql } from "apollo-server";

export const typeDefsProject = gql`
    type Project {
        id: Int!
        name: String!
        price: Float!
        userId: Int!
    }

    type Query {
        projects: [Project!]!
        filterProjectById(id: Int!): Project!
        filterProjectsByName(name: String!): [Project!]!
    }

    input CreateProject {
        name: String!
        price: Float!
        userId: Int!
    }

    type Mutation {
        createProject(input: CreateProject!): Project!
    }
`;