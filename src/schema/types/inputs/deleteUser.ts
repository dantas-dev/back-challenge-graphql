import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLInt,
} from 'graphql';

const deleteUserInput = new GraphQLInputObjectType({
  name: 'deleteUserInput',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
    },
  },
});

export default deleteUserInput;
