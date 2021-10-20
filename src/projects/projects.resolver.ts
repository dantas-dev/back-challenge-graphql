import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateProjectInput } from './dto/create-project.input';
import { Project } from './entities/project.entity';
import { ProjectsService } from './projects.service';

@Resolver('Project')
export class ProjectsResolver {
  constructor(private readonly projectsService: ProjectsService) {}
  @Mutation(() => Project, {
    name: 'createUser',
  })
  create(@Args('createUserInput') createUserInput: CreateProjectInput) {
    return null;
  }
  @Query(() => [Project], { name: 'projects' })
  findAll(): Promise<Project[]> {
    return this.projectsService.findAll();
  }
}
