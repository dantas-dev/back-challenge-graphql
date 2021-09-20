import { makeCreateUserUseCase } from '@/factories/usecases'
import { CreateUserController } from '@/presentation/controllers'
import { Controller } from '@/presentation/protocols'

export const makeCreateUserController = (): Controller => {
  return new CreateUserController(makeCreateUserUseCase())
}
