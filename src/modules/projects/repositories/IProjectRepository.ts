import Project from '../infra/typeorm/entities/Project';

import ICreateProjectDTO from '../dtos/ICreateProjectDTO';
import ProjectInputByName from '../graphql/input/ProjectInputByName';

export default interface IProjectRepository {
  findById(id: number): Promise<Project | undefined>;
  findAll(data: ProjectInputByName): Promise<Project[]>;
  create(data: ICreateProjectDTO): Promise<Project>;
  save(project: Project): Promise<Project>;
}
