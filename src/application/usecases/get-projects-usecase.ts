import { GetProjectsRepository } from '@/application/protocols/repositories'
import { GetProjects } from '@/application/protocols/usecases'
import { Project } from '@/entities'

export class GetProjectsUseCase implements GetProjects {
  constructor (
    private readonly repository: GetProjectsRepository
  ) { }

  async getAll (): Promise<Project[]> {
    return await this.repository.getAll()
  }
}
