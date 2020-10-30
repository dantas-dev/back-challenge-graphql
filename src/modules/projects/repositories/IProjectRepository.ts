import Project from '../infra/typeorm/entities/Project';

import ProjectInput from '../graphql/type';

export default interface IProjectRepository {
  findAll(): Promise<Project[]>;
  findById(id: number): Promise<Project | undefined>;
  create(data: ProjectInput): Promise<Project>;
  save(project: Project): Promise<Project>;
}
