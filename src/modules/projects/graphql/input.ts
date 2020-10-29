import {
  GraphQLFloat,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLString,
} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'ProjectInput',
  fields: {
    name: {
      type: GraphQLString,
    },
    price: {
      type: GraphQLFloat,
    },
    user_id: {
      type: GraphQLInt,
    },
  },
});
