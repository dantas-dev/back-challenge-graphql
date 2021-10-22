import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateProjectInput } from './dto/create-project.input';
import { Project } from './entities/project.entity';
import { ProjectsService } from './projects.service';

@Resolver('Project')
export class ProjectsResolver {
  constructor(private readonly projectsService: ProjectsService) {}
  @Mutation(() => Project, {
    name: 'createProject',
  })
  async create(@Args('createUserInput') createUserInput: CreateProjectInput) {
    return await this.projectsService.create(createUserInput);
  }
  @Query(() => [Project], { name: 'projects' })
  async findAll(): Promise<Project[]> {
    return await this.projectsService.findAll();
  }
}
