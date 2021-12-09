import {GraphQLObjectType} from 'graphql';

import createUser from './mutations/createUser';
import deleteUser from './mutations/deleteUser';
import updateUser from './mutations/updateUser';

import createProject from './mutations/createProject';
import deleteProject from './mutations/deleteProject';
import updateProject from './mutations/updateProject';

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: (): any => ({
    createUser: createUser,
    updateUser: updateUser,
    deleteUser: deleteUser,
    createProject: createProject,
    updateProject: updateProject,
    deleteProject: deleteProject,
  }),
});

export default mutation;
