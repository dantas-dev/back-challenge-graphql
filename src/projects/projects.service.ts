import { Injectable } from '@nestjs/common';
import { Project } from './entities/project.entity';
import { ProjectsRepository } from './repositories/projects.repository';

@Injectable()
export class ProjectsService {
  constructor(private readonly projectsRepository: ProjectsRepository) {}
  findAll(): Project[] {
    const fakeList: Project[] = [];
    return fakeList;
  }
}
