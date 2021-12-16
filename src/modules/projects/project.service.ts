import { InjectQueryService, QueryService } from '@nestjs-query/core';
import { ConflictException, Injectable } from '@nestjs/common';
import { CreateProjectDTO } from './dtos/createProject.dto';
import { ProjectEntity } from './entities/project.entity';
import { ProjectRepository } from './repositories/project.repository';

@Injectable()
export class ProjectService {
  constructor(private userRepository: ProjectRepository) {}

  async createOne(createUserInput: CreateProjectDTO): Promise<ProjectEntity> {
    console.log('createUserInput: ' + createUserInput);
    const createdUser = await this.userRepository.createOne(createUserInput);

    if (!createdUser) {
      throw new ConflictException('User was not created');
    }

    return createdUser;
  }

  async findAll() {
    return await this.userRepository.findAll();
  }
}
