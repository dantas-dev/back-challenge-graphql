import { InjectQueryService, QueryService } from '@nestjs-query/core';
import { Injectable } from '@nestjs/common';
import { UserEntity } from '../../users/entities/user.entity';
import { CreateProjectDTO } from '../dtos/createProject.dto';
import { ProjectEntity } from '../entities/project.entity';

@Injectable()
export class ProjectRepository {
  constructor(
    @InjectQueryService(ProjectEntity)
    readonly service: QueryService<ProjectEntity>,
  ) {}

  async createOne(createProjectDTO: CreateProjectDTO) {
    return await this.service.createOne(createProjectDTO);
  }

  async findAll() {
    return await this.service.query({});
  }

  async addUsersToProject(projectID: string, userID: string[]) {
    return await this.service.addRelations('users', projectID, userID);
  }
}
