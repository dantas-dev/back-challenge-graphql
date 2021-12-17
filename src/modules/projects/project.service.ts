import { ConflictException, Injectable } from '@nestjs/common';
import { CreateProjectDTO } from './dtos/createProject.dto';
import { ProjectEntity } from './entities/project.entity';
import { ProjectRepository } from './repositories/project.repository';

@Injectable()
export class ProjectService {
  constructor(private projectRepository: ProjectRepository) {}
  async createOne(createUserInput: CreateProjectDTO): Promise<ProjectEntity> {
    const createdUser = await this.projectRepository.createOne(createUserInput);

    if (!createdUser) {
      throw new ConflictException('User was not created');
    }

    return createdUser;
  }

  async findAll() {
    return await this.projectRepository.findAll();
  }

  async addUsersToProject(userID: string, projectID: string[]) {
    return await this.projectRepository.addUsersToProject(userID, projectID);
  }
}
