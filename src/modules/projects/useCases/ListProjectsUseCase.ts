import { inject, injectable } from "tsyringe";

import { Project } from "../entities/Project";
import { IProjectRepository } from "../repositories/IProjectRepository";

@injectable()
class ListProjectsUseCase {
  constructor(
    @inject("ProjectsRepositoryPG")
    private projectsRpository: IProjectRepository
  ) {}

  async execute(): Promise<Project[]> {
    const projects = this.projectsRpository.list();
    return projects;
  }
}

export { ListProjectsUseCase };
