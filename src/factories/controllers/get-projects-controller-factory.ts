import { makeGetProjectsUseCase } from '@/factories/usecases'
import { GetProjectsController } from '@/presentation/controllers'
import { Controller } from '@/presentation/protocols'

export const makeGetProjectsController = (): Controller => {
  return new GetProjectsController(makeGetProjectsUseCase())
}
