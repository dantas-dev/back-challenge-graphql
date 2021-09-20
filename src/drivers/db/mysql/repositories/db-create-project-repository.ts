import { CreateProjectRepository } from '@/application/protocols/repositories'
import { CreateProjectDto } from '@/application/usecases'
import ProjectModel from '@/drivers/db/mysql/models/project-model'
import { Project } from '@/entities'
import { InvalidRelationError, MissingParamError } from '@/presentation/errors'
import { DatabaseError, ForeignKeyConstraintError } from 'sequelize'

export class DbCreateProjectRepository implements CreateProjectRepository {
  async create (data: CreateProjectDto): Promise<Project> {
    try {
      return await ProjectModel.create(data)
    } catch (error) {
      if (error instanceof ForeignKeyConstraintError) {
        throw new InvalidRelationError()
      }
      if (error instanceof DatabaseError) {
        throw new MissingParamError('')
      }
    }
  }
}
