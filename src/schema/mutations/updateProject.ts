import {GraphQLNonNull} from 'graphql';
import Context from '../../context/Context';
import {default as projectType} from '../types/project';
import SetProject from '../types/inputs/setProject';

const Project = {
  type: projectType,
  args: {
    input: {
      type: new GraphQLNonNull(SetProject),
    },
  },
  resolve: (_, {input}, context: Context): Promise<any> => {
    return context.repositories.project.update(input.id, input.name, input.price);
  },
};

export default Project;
