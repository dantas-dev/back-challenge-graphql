import { makeGetUsersUseCase } from '@/factories/usecases'
import { GetUsersController } from '@/presentation/controllers'
import { Controller } from '@/presentation/protocols'

export const makeGetUsersController = (): Controller => {
  return new GetUsersController(makeGetUsersUseCase())
}
