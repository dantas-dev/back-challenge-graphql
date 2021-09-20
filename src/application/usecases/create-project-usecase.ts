import { CreateProjectRepository } from '@/application/protocols/repositories'
import { CreateProject } from '@/application/protocols/usecases'
import { CreateProjectDto } from '@/application/usecases'
import { Project } from '@/entities'

export class CreateProjectUseCase implements CreateProject {
  constructor (
    private readonly repository: CreateProjectRepository
  ) {}

  async create (data: CreateProjectDto): Promise<Project> {
    // const dto = new CreateProjectDto(data)
    // if (!CreateProjectDto.isValid(dto)) {
    //   return { data: undefined, error: 'invalid-data' }
    // }
    return await this.repository.create(data)
  }
}
