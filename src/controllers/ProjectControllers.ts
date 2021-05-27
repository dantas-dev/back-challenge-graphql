import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { getRepository, Like, Repository } from "typeorm";

import { Project } from "../database/entities/Project";

@Resolver(Project)
class ProjectControllers {
  private repository: Repository<Project>;

  constructor() {
    this.repository = getRepository(Project);
  }

  @Query((returns) => [Project], { name: "projects" })
  async findAllProjects() {
    const limit = 10;
    const page = 0;
    const projects = await this.repository.find({
      take: limit,
      skip: page,
      relations: ["user"],
    });

    return projects;
  }

  @Query((returns) => Project, { name: "projectById" })
  async findProjectById(@Arg("id") id: string) {
    const project = await this.repository.findOne(id, {
      relations: ["user"],
    });

    if (!project) {
      throw new Error("Project not found");
    }

    return project;
  }

  @Query((returns) => [Project], { name: "projectByName" })
  async findProjectByName(@Arg("name") name: string) {
    const project = await this.repository.find({
      where: {
        name: Like(`%${name}%`),
      },
      relations: ["user"],
    });

    if (!project) {
      throw new Error("Project not found");
    }

    return project;
  }

  @Mutation((returns) => Project, { name: "createProject" })
  async createProject(
    @Arg("name") name: string,
    @Arg("price") price: number,
    @Arg("user") user: string
  ) {
    const newProject = this.repository.create({
      name,
      price,
      user_id: user,
    });

    await this.repository.save(newProject);

    const ProjectWithUser = await this.repository.findOne({
      where: { id: newProject.id },
      relations: ["user"],
    });

    return ProjectWithUser;
  }

  @Mutation((returns) => String, { name: "deleteProject" })
  async deleteProjectById(@Arg("id") id: string) {
    const project = await this.repository.findOne(id);

    if (!project) {
      throw new Error("Project not found");
    }

    await this.repository.delete(project);

    return "Project deleted!";
  }
}

export { ProjectControllers };
