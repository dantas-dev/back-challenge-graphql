import { GetProjectsRepository } from '@/application/protocols/repositories'
import ProjectModel from '@/drivers/db/mysql/models/project-model'
import UserModel from '@/drivers/db/mysql/models/user-model'
import { Project } from '@/entities'

export class DbGetProjectsRepository implements GetProjectsRepository {
  async getAll (): Promise<Project[]> {
    const result: Project[] = await ProjectModel.findAll({ include: [UserModel] })
    return result
  }
}
