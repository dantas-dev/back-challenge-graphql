// This class follows the SOLID Single Responsibility Principle.
// Its only purpose is to find an "User" by Id.

import { inject, injectable } from 'tsyringe';
import IProjectDTO from '../dto/IProjectDTO';
import IProjectsRepository from '../repositoryInterface/IProjectsRepository';

@injectable()
class FindUserByIdService {
  constructor(
    @inject('ProjectsRepository')
    private projectsRepository: IProjectsRepository,
  ) {}

  public async execute(id: string): Promise<IProjectDTO | undefined> {
    return this.projectsRepository.findById(id);
  }
}

export default FindUserByIdService;
