import { makeCreateProjectUseCase } from '@/factories/usecases'
import { CreateProjectController } from '@/presentation/controllers'
import { Controller } from '@/presentation/protocols'

export const makeCreateProjectController = (): Controller => {
  return new CreateProjectController(makeCreateProjectUseCase())
}
