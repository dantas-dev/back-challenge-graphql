import { CreateProject } from '@/application/protocols/usecases'
import { CreateProjectUseCase } from '@/application/usecases'
import { DbCreateProjectRepository } from '@/drivers/db/mysql/repositories'

export const makeCreateProjectUseCase = (): CreateProject => {
  return new CreateProjectUseCase(new DbCreateProjectRepository())
}
