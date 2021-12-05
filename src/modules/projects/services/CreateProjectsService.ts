// This class follows the SOLID Single Responsibility Principle.
// Its only purpose is to create a new "Projects" entry in the database.

import IUserDTO from '@modules/users/dto/IUserDTO';
import CreateUsersService from '@modules/users/services/CreateUsersService';
import { container, inject, injectable } from 'tsyringe';
import IProjectDTO from '../dto/IProjectDTO';
import IProjectsRepository from '../repositoryInterface/IProjectsRepository';

@injectable()
class CreateProjectsService {
  constructor(
    @inject('ProjectsRepository')
    private projectsRepository: IProjectsRepository,
  ) {}

  public async execute(
    name: string,
    price: number,
    user: IUserDTO,
  ): Promise<IProjectDTO> {
    try {
      if (name === '') {
        throw new Error('Parameter "name" of project cannot be empty.');
      }

      if (price <= 0) {
        throw new Error('Parameter "price" of project must be greater than 0.');
      }

      const createdProject = await this.projectsRepository.create(
        user.id!,
        name,
        price,
      );

      return Object.assign(createdProject, { user });
    } catch (err: any) {
      throw new Error(`Error creating new project: ${err.message}`);
    }
  }
}

export default CreateProjectsService;
