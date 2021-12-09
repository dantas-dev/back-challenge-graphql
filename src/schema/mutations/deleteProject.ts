import {GraphQLNonNull} from 'graphql';
import Context from '../../context/Context';
import {default as projectType} from '../types/project';
import deleteUserInput from '../types/inputs/deleteUser';

const deleteUser = {
  type: projectType,
  args: {
    input: {
      type: new GraphQLNonNull(deleteUserInput),
    },
  },
  resolve: (_, {input}, context: Context): Promise<any> => {
    return context.repositories.project.delete(input.id);
  },
};

export default deleteUser;
