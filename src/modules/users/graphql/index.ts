import { GraphQLList } from 'graphql';

import UserInput from './input';
import { createUser, users } from './resolver';

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
        type: UserInput,
      },
    },
  },
};
