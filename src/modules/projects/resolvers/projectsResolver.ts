/* eslint-disable @typescript-eslint/no-unused-vars */
import { container } from "tsyringe";
import { Arg, Mutation, Query, Resolver } from "type-graphql";

import { GetUserByIdUseCase } from "../../user/useCases/GetUserByIdUseCase";
import { CreateProjectInput } from "../schemas/createProjectInput";
import { Project } from "../schemas/projects";
import { CreateProjectUseCase } from "../useCases/CreateProjectUseCase";
import { ListProjectsUseCase } from "../useCases/ListProjectsUseCase";

@Resolver((of) => Project)
class ProjectsResolver {
  @Query((returns) => [Project], { nullable: true })
  async listProjects(): Promise<Project[]> {
    const listProjectsUseCase = container.resolve(ListProjectsUseCase);
    const projects = await listProjectsUseCase.execute();

    return projects;
  }

  @Mutation((returns) => Project)
  async createProject(
    @Arg("ProjectInput") { name, price, userId }: CreateProjectInput
  ): Promise<Project> {
    const getUserByIdUseCase = container.resolve(GetUserByIdUseCase);
    const user = await getUserByIdUseCase.execute(userId);

    const createProjectUseCase = container.resolve(CreateProjectUseCase);
    const project = await createProjectUseCase.execute({ name, price, user });

    return project;
  }
}

export { ProjectsResolver };
