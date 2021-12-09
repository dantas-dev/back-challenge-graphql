import {GraphQLNonNull} from 'graphql';
import Context from '../../context/Context';
import {default as userType} from '../types/user';
import newUser from '../types/inputs/newUser';

const createUser = {
  type: userType,
  args: {
    input: {
      type: new GraphQLNonNull(newUser),
    },
  },
  resolve: (_, {input}, context: Context): Promise<any> => {
    return context.repositories.user.create(input);
  },
};

export default createUser;
