import {GraphQLID, GraphQLNonNull} from 'graphql';
import Context from '../../context/Context';
import {default as projectType} from '../types/project';

const project = {
  type: projectType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: (_, {id}, context: Context) => {
    return context.repositories.project.get(id);
  },
};

export default project;
