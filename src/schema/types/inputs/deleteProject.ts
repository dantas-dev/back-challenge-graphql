import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLInt,
} from 'graphql';

const deleteProjectInput = new GraphQLInputObjectType({
  name: 'deleteProjectInput',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
    },
  },
});

export default deleteProjectInput;
