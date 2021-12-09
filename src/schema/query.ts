import {GraphQLObjectType} from 'graphql';
import user from './queries/user';
import users from './queries/users';
import project from './queries/project';
import projects from './queries/projects';

const query = new GraphQLObjectType({
  name: 'Query',
  fields: (): any => ({
    user,
    users,
    project,
    projects,
  }),
});

export default query;
