import { container } from 'tsyringe';

import ProjectsRepository from '@modules/projects/infra/typeorm/repositoryImplementation/ProjectsRepository';
import IProjectsRepository from '@modules/projects/repositoryInterface/IProjectsRepository';

container.registerSingleton<IProjectsRepository>(
  'ProjectsRepository',
  ProjectsRepository,
);
