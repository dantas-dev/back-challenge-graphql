import { Arg, Args, ArgsType, Mutation, Query, Resolver } from "type-graphql";
import { getRepository, Repository } from "typeorm";

import { Project } from "../database/entities/Project";
import { ProjectSchema } from "../schemas/ProjectSchema";

@Resolver(ProjectSchema)
class ProjectControllers {
  private repository: Repository<Project>;

  constructor() {
    this.repository = getRepository(Project);
  }

  @Query((returns) => [Project], { name: "projects" })
  async find() {
    const projects = this.repository.find();

    return projects;
  }

  @Mutation((returns) => Project, { name: "createProject" })
  async createProject(
    @Arg("name") name: string,
    @Arg("price") price: number,
    @Arg("userID") user_id: string
  ) {
    const newProject = this.repository.create({
      name,
      price,
      user_id,
    });

    console.log(newProject);

    await this.repository.save(newProject);

    return newProject;
  }
}

export { ProjectControllers };
