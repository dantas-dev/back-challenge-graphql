import {GraphQLNonNull} from 'graphql';
import Context from '../../context/Context';
import {default as userType} from '../types/user';
import deleteUserInput from '../types/inputs/deleteUser';

const deleteUser = {
  type: userType,
  args: {
    input: {
      type: new GraphQLNonNull(deleteUserInput),
    },
  },
  resolve: (_, {input}, context: Context): Promise<any> => {
    return context.repositories.user.delete(input.id);
  },
};

export default deleteUser;
