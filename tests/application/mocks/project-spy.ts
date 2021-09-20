import { CreateProject, GetProjects } from '@/application/protocols/usecases'
import { CreateProjectDto } from '@/application/usecases'
import { Project } from '@/entities'
import { mockProject } from '@/tests/entities/mocks/mock-project'

export class CreateProjectUseCaseSpy implements CreateProject {
  input: any
  result = mockProject(1)

  async create (data: CreateProjectDto): Promise<Project> {
    this.input = data
    return this.result
  }
}

export class GetProjectsUseCaseSpy implements GetProjects {
  result: any

  async getAll (): Promise<Project[]> {
    this.result = [mockProject()]
    return this.result
  }
}
