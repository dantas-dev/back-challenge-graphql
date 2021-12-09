import {GraphQLEnumType} from 'graphql';

export default new GraphQLEnumType({
  name: 'UsersOrderField',
  values: {
    ID: {
      value: 'id',
    },
    NAME: {
      value: 'name',
    },
    EMAIL: {
      value: 'email',
    },
    CREATED_AT: {
      value: 'createdAt',
    },
  },
});
