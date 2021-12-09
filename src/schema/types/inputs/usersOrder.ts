import {
  GraphQLInputObjectType,
  GraphQLNonNull,
} from 'graphql';
import usersOrderField from '../enums/usersOrderField';
import direction from '../enums/direction';

const usersOrder = new GraphQLInputObjectType({
  name: 'UsersOrder',
  fields: {
    field: {
      type: new GraphQLNonNull(usersOrderField),
    },
    direction: {
      type: new GraphQLNonNull(direction),
    },
  },
});

export default usersOrder;
