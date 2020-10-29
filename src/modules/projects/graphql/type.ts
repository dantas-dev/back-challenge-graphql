import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLFloat,
  GraphQLInt,
} from 'graphql';

export default new GraphQLObjectType({
  name: 'ProjectType',
  fields: {
    id: {
      type: GraphQLNonNull(GraphQLInt),
    },
    name: {
      type: GraphQLNonNull(GraphQLString),
    },
    price: {
      type: GraphQLNonNull(GraphQLFloat),
    },
    user_id: {
      type: GraphQLNonNull(GraphQLInt),
    },
  },
});
