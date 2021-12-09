import {GraphQLID, GraphQLNonNull} from 'graphql';
import Context from '../../context/Context';
import {default as userType} from '../types/user';

const user = {
  type: userType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: (_, {id}, context: Context): Promise<any> => {
    return context.repositories.user.get(id);
  },
};

export default user;
