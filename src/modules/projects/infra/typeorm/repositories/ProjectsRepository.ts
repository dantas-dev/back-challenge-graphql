import { getRepository, Repository, Like } from 'typeorm';

import IProjectRepository, {
  IFindByName,
} from '@modules/projects/repositories/IProjectRepository';
import ICreateProjectDTO from '@modules/projects/dtos/ICreateProjectDTO';

import User from '@modules/users/infra/typeorm/entities/User';
import Project from '../entities/Project';

export default class ProjectsRepository implements IProjectRepository {
  private ormRepository: Repository<Project>;

  constructor() {
    this.ormRepository = getRepository(Project);
  }

  public async findAll(): Promise<Project[]> {
    return this.ormRepository.find({
      take: 5,
      relations: ['user'],
    });
  }

  public async findById(id: number): Promise<Project | undefined> {
    const project = await this.ormRepository.findOne({ where: { id } });

    return project;
  }

  public async findByName({
    name,
    limit,
    page,
  }: IFindByName): Promise<Project[]> {
    const project = await this.ormRepository.find({
      where: {
        name: Like(`%${name}%`),
      },
      take: limit,
      skip: page,
    });

    return project;
  }

  public async create({
    name,
    price,
    user_id: id,
  }: ICreateProjectDTO): Promise<Project> {
    const existProject = await this.ormRepository.findOne({ where: { name } });

    if (existProject) {
      throw new Error('Project already exists');
    }

    const usersRepository = getRepository(User);
    const user = await usersRepository.findOne({ where: { id } });

    if (!user) {
      throw new Error('User not found');
    }

    const project = this.ormRepository.create({
      name,
      price,
      user,
    });

    await this.ormRepository.save(project);

    return project;
  }

  public async save(project: Project): Promise<Project> {
    return this.ormRepository.save(project);
  }
}
