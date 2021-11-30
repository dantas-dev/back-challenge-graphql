import { Injectable } from '@nestjs/common';
import { CreateProjectInput } from './dto/create-project.input';
import { Project } from './entities/projects.entity';
import { ProjectsRepository } from './repositories/projects.repository';

@Injectable()
export class ProjectsService {
  constructor(private readonly projectsRepository: ProjectsRepository) {}
  findAll(): Promise<Project[]> {
    return this.projectsRepository.findAll();
  }

  async create(createProjectInput: CreateProjectInput) {
    const result = await this.projectsRepository.create(createProjectInput);
    return result;
  }
}
