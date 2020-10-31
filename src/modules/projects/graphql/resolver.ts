import { Arg, Mutation, Query, Resolver } from 'type-graphql';

import Project from '../infra/typeorm/entities/Project';
import ProjectsRepository from '../infra/typeorm/repositories/ProjectsRepository';

import ProjectInput from './input';
import ProjectInputById from './input/ProjectInputById';
import ProjectInputByName from './input/ProjectInputByName';

@Resolver()
export default class ProjectResolver {
  @Mutation(() => Project)
  async createProject(
    @Arg('projectInput', () => ProjectInput) projectInput: ProjectInput,
  ) {
    const { name, price, user_id } = projectInput;

    const projectRepository = new ProjectsRepository();

    const project = projectRepository.create({
      name,
      price,
      user_id,
    });

    return project;
  }

  @Query(() => [Project])
  async projects(
    @Arg('projectInputByName', () => ProjectInputByName)
    projectInputByName: ProjectInputByName,
  ) {
    const projectRepository = new ProjectsRepository();

    return projectRepository.findAll(projectInputByName);
  }

  @Query(() => Project)
  async project(
    @Arg('options', () => ProjectInputById)
    options: ProjectInputById,
  ) {
    const projectRepository = new ProjectsRepository();

    return projectRepository.findById(options.id);
  }
}
