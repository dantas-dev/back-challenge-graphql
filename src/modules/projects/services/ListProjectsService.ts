// This class follows the SOLID Single Responsibility Principle.
// Its only purpose is to list the "Projects" entries in the database.

import { inject, injectable } from 'tsyringe';

import IProjectDTO from '../dto/IProjectDTO';
import IProjectsRepository from '../repositoryInterface/IProjectsRepository';

@injectable()
class ListProjectsService {
  constructor(
    @inject('ProjectsRepository')
    private projectsRepository: IProjectsRepository,
  ) {}

  public async execute(
    page?: number,
    perPage?: number,
    name?: string,
  ): Promise<IProjectDTO[]> {
    if (page !== undefined && page <= 0) {
      throw new Error('Parameter "page" must be greater than 0.');
    }

    if (perPage !== undefined && perPage <= 0) {
      throw new Error('Parameter "perPage" must be greater than 0.');
    }

    return this.projectsRepository.findAll(page, perPage, name);
  }
}

export default ListProjectsService;
