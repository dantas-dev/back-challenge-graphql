import { Arg, Int, Mutation, Query, Resolver } from 'type-graphql';

import ProjectInput from '../types/ProjectTypes';

import User from '../../models/User';
import Project from '../../models/Project';


@Resolver()
export default class ProjectResolver {
  @Mutation(() => Project)
  async createProject(
    @Arg('options', () => ProjectInput) options: ProjectInput
  ) {
    const user = await User.findOne({ where: { id: options.user_id } });
    const dto = {
      name: options.name,
      email: options.email,
      user
    }
    const project = await Project.create(dto).save();
    return project;
  }

  @Query(() => [Project])
  async project(
    @Arg('currentPage', () => Int, { nullable: true }) currentPage: number,
  ) {
    const projects = await Project.find({ relations: ['user'] });
    const current = (currentPage | 0) * 50;

    return projects.slice(current, current + 50);
  }
}
