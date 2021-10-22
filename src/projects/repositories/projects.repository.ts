import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../../users/entities/user.entity';
import { CreateProjectInput } from '../dto/create-project.input';
import { Project } from '../entities/project.entity';
@Injectable()
export class ProjectsRepository {
  constructor(
    @InjectModel(Project)
    private projectModel: typeof Project,
  ) {}
  async create(createProjectInput: CreateProjectInput): Promise<Project> {
    const project = await this.projectModel.create(createProjectInput);
    return this.findOne(project.id);
  }

  async findOne(id: number): Promise<Project> {
    return await this.projectModel.findByPk(id, {
      include: {
        model: User,
        required: true,
      },
    });
  }

  findAll(): Promise<Project[]> {
    return this.projectModel.findAll({
      include: {
        model: User,
        required: true,
      },
    });
  }
}
