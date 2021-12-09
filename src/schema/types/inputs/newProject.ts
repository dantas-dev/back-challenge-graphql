import {
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';
import {GraphQLFloat} from 'graphql/type/scalars';

const newProject = new GraphQLInputObjectType({
  name: 'NewProject',
  fields: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    price: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
    userId: {
      type: new GraphQLNonNull(GraphQLInt),
    },
  },
});

export default newProject;
