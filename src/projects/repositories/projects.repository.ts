import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProjectInput } from '../dto/create-project.input';
import { Project } from '../entities/project.entity';
@Injectable()
export class ProjectsRepository {
  constructor(
    @InjectModel(Project)
    private projectModel: typeof Project,
  ) {}
  async create(createProjectInput: CreateProjectInput): Promise<Project> {
    return this.projectModel.create(createProjectInput);
  }

  findAll(): Promise<Project[]> {
    return this.projectModel.findAll();
  }
}
