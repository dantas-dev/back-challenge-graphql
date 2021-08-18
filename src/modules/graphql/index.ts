import { GraphQLObjectType, GraphQLSchema } from "graphql";

import { GET_ALL_USERS, GET_ONE_USER } from './users/Schemas/Queries/User';
import { CREATE_USER } from './users/Schemas/Mutations/User';
import { GET_ALL_PROJECTS } from "./projects/Schemas/Queries/Projects";
import { CREATE_PROJECTS } from './projects/Schemas/Mutations/Projects';

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllUsers: GET_ALL_USERS,
        getAllProjects: GET_ALL_PROJECTS,
        getOneUser: GET_ONE_USER
    },
})

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: CREATE_USER,
        createProjects: CREATE_PROJECTS
    },    
})

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
})