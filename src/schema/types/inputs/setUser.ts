import {
  GraphQLInputObjectType, GraphQLInt,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';

const setUser = new GraphQLInputObjectType({
  name: 'SetUser',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
});

export default setUser;
