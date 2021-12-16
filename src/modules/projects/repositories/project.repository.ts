import { InjectQueryService, QueryService } from '@nestjs-query/core';
import { Injectable } from '@nestjs/common';
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
}
