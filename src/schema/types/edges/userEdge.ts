import {
  GraphQLInt,
  GraphQLObjectType,
} from 'graphql';
import user from '../user';

const userEdge = new GraphQLObjectType({
  name: 'UserEdge',
  description: 'List of edges.',
  fields: {
    node: {
      description: 'The item at the end of the edge.',
      type: user,
    },
    cursor: {
      description: 'A cursor for pagination.',
      type: GraphQLInt,
    },
  },
});

export default userEdge;
