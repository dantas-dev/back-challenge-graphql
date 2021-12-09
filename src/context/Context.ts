import DataLoader from 'dataloader';
import UserRepository from '../repositories/UserRepository';
import ProjectRepository from '../repositories/ProjectRepository';
import { User } from '../types';

interface RepositoriesContext {
  user: UserRepository;
  project: ProjectRepository;
}

interface LoadersContext {
  user: DataLoader<number, User>;
}

export default interface Context {
  repositories: RepositoriesContext;
  loaders: LoadersContext;
}
