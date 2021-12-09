import {
  GraphQLBoolean,
  GraphQLObjectType,
  GraphQLInt,
} from 'graphql';

const pageInfo = new GraphQLObjectType({
  name: 'PageInfo',
  description: 'Information about pagination in a connection.',
  fields: {
    endCursor: {
      description: 'The item at the end of the edge.',
      type: GraphQLInt,
    },
    hasNextPage: {
      description: 'When paginating forwards, are there more items?',
      type: GraphQLBoolean,
    },
    hasPreviousPage: {
      description: 'When paginating backwards, are there more items?',
      type: GraphQLBoolean,
    },
    startCursor: {
      description: 'When paginating backwards, the cursor to continue.',
      type: GraphQLInt,
    },
  },
});

export default pageInfo;
