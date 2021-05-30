import { ICreateProjectDTO } from "../dtos/ICreateProjectDTO";
import { Project } from "../entities/Project";

interface IProjectRepository {
  list(): Promise<Project[]>;
  create({ name, price, user }: ICreateProjectDTO): Promise<Project>;
}

export { IProjectRepository };
