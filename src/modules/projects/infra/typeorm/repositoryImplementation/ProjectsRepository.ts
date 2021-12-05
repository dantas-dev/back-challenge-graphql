import BaseRepository from '@modules/base/infra/typeorm/repositoryImplementation/BaseRepository';
import IProjectDTO from '@modules/projects/dto/IProjectDTO';
import IProjectsRepository from '@modules/projects/repositoryInterface/IProjectsRepository';
import { getRepository } from 'typeorm';
import Project from '../entities/Project';

class ProjectsRepository extends BaseRepository implements IProjectsRepository {
  constructor() {
    super();
    this.ormRepository = getRepository(Project);
  }

  public async create(
    userId: string,
    name: string,
    price: number,
  ): Promise<IProjectDTO> {
    return this.ormRepository.save({ userId, name, price });
  }
}

export default ProjectsRepository;
