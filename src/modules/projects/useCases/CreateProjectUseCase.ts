import { inject, injectable } from "tsyringe";

import { ICreateProjectDTO } from "../dtos/ICreateProjectDTO";
import { Project } from "../entities/Project";
import { IProjectRepository } from "../repositories/IProjectRepository";

@injectable()
class CreateProjectUseCase {
  constructor(
    @inject("ProjectRepositoryPG")
    private projectsRepository: IProjectRepository
  ) {}

  async execute({ name, price, user }: ICreateProjectDTO): Promise<Project> {
    const project = await this.projectsRepository.create({ name, price, user });
    return project;
  }
}

export { CreateProjectUseCase };
