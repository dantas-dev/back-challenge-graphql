import {getUsers, getProjects, createUser, createProject} from '../utils';


export const resolvers = {
        Query: {
          users: async () => getUsers(),
          projects: async () => getProjects()
        },

        Mutation: {
          createUser: async () => createUser(),
          createProject: async () => createProject(),
        },
};