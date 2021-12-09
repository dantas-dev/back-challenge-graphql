import {
  GraphQLInt,
  GraphQLObjectType,
} from 'graphql';
import project from '../project';

const projectEdge = new GraphQLObjectType({
  name: 'ProjectEdge',
  description: 'List of edges.',
  fields: {
    node: {
      description: 'The item at the end of the edge.',
      type: project,
    },
    cursor: {
      description: 'A cursor for pagination.',
      type: GraphQLInt,
    },
  },
});

export default projectEdge;
