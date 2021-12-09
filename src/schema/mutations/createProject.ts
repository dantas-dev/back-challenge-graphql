import {GraphQLNonNull} from 'graphql';
import Context from '../../context/Context';
import {default as projectType} from '../types/project';
import newProject from '../types/inputs/newProject';

const createUser = {
  type: projectType,
  args: {
    input: {
      type: new GraphQLNonNull(newProject),
    },
  },
  resolve: (_, {input}, context: Context): Promise<any> => {
    return context.repositories.project.create(input);
  },
};

export default createUser;
