import { GraphQLList } from 'graphql';

import { createUser, users } from './resolver';
import CreateUserInput from './input';

import UserType from './type';

export const queries = {
  users: {
    type: GraphQLList(UserType),
    resolve: users,
  },
};

export const mutations = {
  createUser: {
    type: UserType,
    resolve: createUser,
    args: {
      input: {
        type: CreateUserInput,
      },
    },
  },
};
