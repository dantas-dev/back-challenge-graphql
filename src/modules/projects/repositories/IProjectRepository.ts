import Project from '../infra/typeorm/entities/Project';

import ICreateProjectDTO from '../dtos/ICreateProjectDTO';

export interface IFindByName {
  name: string;
  limit: number;
  page: number;
}

export default interface IProjectRepository {
  findAll(): Promise<Project[]>;
  findById(id: number): Promise<Project | undefined>;
  findByName(data: IFindByName): Promise<Project[]>;
  create(data: ICreateProjectDTO): Promise<Project>;
  save(project: Project): Promise<Project>;
}
