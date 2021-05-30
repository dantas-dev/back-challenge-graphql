import { getRepository, Repository } from "typeorm";

import { User } from "../../../user/entities/User";
import { ICreateProjectDTO } from "../../dtos/ICreateProjectDTO";
import { Project } from "../../entities/Project";
import { IProjectRepository } from "../IProjectRepository";

class ProjectRepositoryPG implements IProjectRepository {
  private repository: Repository<Project>;

  constructor() {
    this.repository = getRepository(Project);
  }

  async findByUser(name: string, user: User): Promise<Project> {
    const project = await this.repository.findOne({ user, name });
    console.log(project);

    return project;
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
