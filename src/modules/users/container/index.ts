import UsersRepository from '@modules/users/infra/typeorm/repositoryImplementation/UsersRepository';
import IUsersRepository from '@modules/users/repositoryInterface/IUsersRepository';
import { container } from 'tsyringe';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
