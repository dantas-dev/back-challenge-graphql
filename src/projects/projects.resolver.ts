import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateProjectInput } from './dto/create-project.input';
import { Project } from './entities/projects.entity';
import { ProjectsService } from './projects.service';

@Resolver(() => Project)
export class ProjectsResolver {
    constructor(private projectsService: ProjectsService) {}

    @Query(() => [Project], { name: 'projects' })
  async findAll(): Promise<Project[]> {
    return await this.projectsService.findAll();
  }
    @Mutation(() => Project, {
        name: 'createProject',
      })
      create(
        @Args('createProjectInput') createProjectInput: CreateProjectInput,
      ): Promise<Project> {
        return this.projectsService.create(createProjectInput);
      }    
}