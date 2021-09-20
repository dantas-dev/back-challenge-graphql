import { GetProjects } from '@/application/protocols/usecases'
import { GetProjectsUseCase } from '@/application/usecases'
import { DbGetProjectsRepository } from '@/drivers/db/mysql/repositories'

export const makeGetProjectsUseCase = (): GetProjects => {
  return new GetProjectsUseCase(new DbGetProjectsRepository())
}
