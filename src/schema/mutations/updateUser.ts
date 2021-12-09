import {GraphQLNonNull} from 'graphql';
import Context from '../../context/Context';
import {default as userType} from '../types/user';
import SetUser from '../types/inputs/setUser';

const updateUser = {
  type: userType,
  args: {
    input: {
      type: new GraphQLNonNull(SetUser),
    },
  },
  resolve: (_, {input}, context: Context): Promise<any> => {
    return context.repositories.user.update(input.id, input.name, input.email);
  },
};

export default updateUser;
