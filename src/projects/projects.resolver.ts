import { Query, Resolver } from '@nestjs/graphql';
import { Project } from './entities/project.entity';
import { ProjectsService } from './projects.service';

@Resolver('Project')
export class ProjectsResolver {
  constructor(private readonly projectsService: ProjectsService) {}

  @Query(() => [Project], { name: 'projects' })
  findAll(): Project[] {
    return [];
  }
}
