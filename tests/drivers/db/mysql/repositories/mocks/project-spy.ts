import { CreateProjectRepository, GetProjectsRepository } from '@/application/protocols/repositories'
import { CreateProjectDto } from '@/application/usecases'
import { Project } from '@/entities'
import { mockProject } from '@/tests/entities/mocks/mock-project'

export class CreateProjectRepositorySpy implements CreateProjectRepository {
  input: CreateProjectDto
  result: Project

  async create (data: CreateProjectDto): Promise<Project> {
    this.input = data
    this.result = mockProject()
    return this.result
  }
}

export class GetProjectsRepositorySpy implements GetProjectsRepository {
  result: Project[]

  async getAll (): Promise<Project[]> {
    this.result = [mockProject()]
    return this.result
  }
}
