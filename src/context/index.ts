import Context from './Context';
import UserRepository from '../repositories/UserKnexRepository';
import ProjectRepository from '../repositories/ProjectKnexRepository';
import userLoader from '../loaders/userLoader';

const context: Context = {
  repositories: {
    user: new UserRepository(),
    project: new ProjectRepository(),
  },
  loaders: {
    user: userLoader,
  },
};

export default context;
