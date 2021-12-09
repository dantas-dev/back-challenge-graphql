import {GraphQLEnumType} from 'graphql';

export default new GraphQLEnumType({
  name: 'ProjectsOrderField',
  values: {
    ID: {
      value: 'id',
    },
    NAME: {
      value: 'name',
    },
    PRICE: {
      value: 'price',
    },
    CREATED_AT: {
      value: 'createdAt',
    },
  },
});
