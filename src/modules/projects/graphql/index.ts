import {
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLList,
  GraphQLString,
} from 'graphql';

import ProjectInput from './input';
import ProjectType from './type';

import { createProject, projects, findById, findByName } from './resolver';

export const queries = {
  projects: {
    type: GraphQLList(ProjectType),
    resolve: projects,
  },
  projectById: {
    type: ProjectType,
    resolve: findById,
    args: {
      id: {
        type: GraphQLInt,
      },
    },
  },
  projectsByName: {
    type: GraphQLList(ProjectType),
    args: {
      projectInputByName: {
        type: new GraphQLInputObjectType({
          name: 'ProjectByNameType',
          fields: {
            name: {
              type: GraphQLString,
            },
            page: {
              type: GraphQLInt,
            },
            limit: {
              type: GraphQLInt,
            },
          },
        }),
      },
    },
    resolve: findByName,
  },
};

export const mutations = {
  createProject: {
    type: ProjectType,
    resolve: createProject,
    args: {
      projectInput: {
        type: ProjectInput,
      },
    },
  },
};
