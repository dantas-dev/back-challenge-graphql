import { getRepository, Repository } from "typeorm";

import { ICreateProjectDTO } from "../../dtos/ICreateProjectDTO";
import { Project } from "../../entities/Project";
import { IProjectRepository } from "../IProjectRepository";

class ProjectRepositoryPG implements IProjectRepository {
  private repository: Repository<Project>;

  constructor() {
    this.repository = getRepository(Project);
  }

  async list(): Promise<Project[]> {
    const projects = await this.repository.find({ relations: ["user"] });
    return projects;
  }

  async create({ name, price, user }: ICreateProjectDTO): Promise<Project> {
    const project = new Project();
    Object.assign(project, { name, price, user });
    await this.repository.save(project);

    return project;
  }
}

export { ProjectRepositoryPG };
