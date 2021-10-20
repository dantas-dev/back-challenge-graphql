import { Resolver } from '@nestjs/graphql';
import { ProjectsService } from './projects.service';

@Resolver('Project')
export class ProjectsResolver {
  constructor(private readonly projectsService: ProjectsService) {}
}
