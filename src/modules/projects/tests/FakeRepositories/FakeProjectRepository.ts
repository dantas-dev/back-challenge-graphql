import IProjectDTO from '../../dto/IProjectDTO';

import { v4 as uuidv4 } from 'uuid';

class FakeProjectRepository {
  private projects: IProjectDTO[] = [];

  public async create(
    userId: string,
    name: string,
    price: number,
  ): Promise<IProjectDTO> {
    const newProject: IProjectDTO = {
      id: uuidv4(),
      userId,
      name,
      price,
    };

    this.projects.push(newProject);

    return newProject;
  }

  public async findAll(
    page?: number,
    perPage?: number,
    name?: string,
  ): Promise<IProjectDTO[]> {
    if (page === 0 && perPage === 0 && name) {
      return this.projects.filter(u => u.name === name);
    } else if (page && perPage) {
      return this.projects.slice(page - 1, perPage);
    }

    return this.projects;
  }

  public async findById(id: string): Promise<IProjectDTO | undefined> {
    const foundProject = this.projects.find(u => u.id === id);
    return foundProject;
  }
}

export default FakeProjectRepository;
