import {
  GraphQLInputObjectType,
  GraphQLNonNull,
} from 'graphql';
import projectsOrderField from '../enums/projectsOrderField';
import direction from '../enums/direction';

const projectsOrder = new GraphQLInputObjectType({
  name: 'ProjectsOrder',
  fields: {
    field: {
      type: new GraphQLNonNull(projectsOrderField),
    },
    direction: {
      type: new GraphQLNonNull(direction),
    },
  },
});

export default projectsOrder;
