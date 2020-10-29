import { GraphQLList } from 'graphql';

import CreateProjectInput from './input';
import ProjectType from './type';

import { createProject, projects } from './resolver';

export const queries = {
  projects: {
    type: GraphQLList(ProjectType),
    resolve: projects,
  },
};

export const mutations = {
  createProject: {
    type: ProjectType,
    resolve: createProject,
    args: {
      input: {
        type: CreateProjectInput,
      },
    },
  },
};
