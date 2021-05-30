/* eslint-disable @typescript-eslint/no-unused-vars */
import { container } from "tsyringe";
import { Arg, Args, Mutation, Query, Resolver } from "type-graphql";

import { GetUserByIdUseCase } from "../../user/useCases/GetUserByIdUseCase";
import { CreateProjectInput } from "../schemas/createProjectInput";
import { ListProjectsArgs } from "../schemas/listProjectsArgs";
import { Project } from "../schemas/projects";
import { CreateProjectUseCase } from "../useCases/CreateProjectUseCase";
import { ListProjectsUseCase } from "../useCases/ListProjectsUseCase";

@Resolver((of) => Project)
class ProjectsResolver {
  @Query((returns) => [Project])
  async listProjects(
    @Args() { name, price, startIndex, endIndex }: ListProjectsArgs
  ): Promise<Project[]> {
    const listProjectsUseCase = container.resolve(ListProjectsUseCase);
    let projects = await listProjectsUseCase.execute();

    if (name) {
      projects = projects.filter((project) => project.name.includes(name));
    }

    if (price) {
      projects = projects.filter((project) => project.price === price);
    }

    return projects.slice(startIndex, endIndex);
  }

  @Mutation((returns) => Project)
  async createProject(
    @Arg("ProjectInput") { name, price, userId, deadline }: CreateProjectInput
  ): Promise<Project> {
    const getUserByIdUseCase = container.resolve(GetUserByIdUseCase);
    const user = await getUserByIdUseCase.execute(userId);

    const createProjectUseCase = container.resolve(CreateProjectUseCase);
    const project = await createProjectUseCase.execute({
      name,
      price,
      deadline,
      user,
    });

    return project;
  }
}

export { ProjectsResolver };
