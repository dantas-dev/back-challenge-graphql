import { Arg, Mutation, Query, Resolver } from 'type-graphql';

import ProjectInput from '../types/ProjectTypes';

import User from '../../models/User';
import Project from '../../models/Project';

@Resolver()
export default class ProjectResolver {
  @Mutation(() => Project)
  async createProject(
    @Arg('options', () => ProjectInput) options: ProjectInput,
  ): Promise<Project> {
    const user = await User.findOne({ where: { id: options.user_id } });
    const dto = {
      name: options.name,
      email: options.email,
      user,
    };
    const project = await Project.create(dto).save();

    return project;
  }

  @Query(() => [Project])
  project(): Promise<Project[]> {
    return Project.find({ relations: ['user'] });
  }
}
