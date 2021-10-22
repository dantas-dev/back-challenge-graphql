import { Injectable } from '@nestjs/common';
import { CreateProjectInput } from './dto/create-project.input';
import { Project } from './entities/project.entity';
import { ProjectsRepository } from './repositories/projects.repository';

@Injectable()
export class ProjectsService {
  constructor(private readonly projectsRepository: ProjectsRepository) {}
  findAll(): Promise<Project[]> {
    return this.projectsRepository.findAll();
  }

  create(createProjectInput: CreateProjectInput) {
    return this.projectsRepository.create(createProjectInput);
  }
}
