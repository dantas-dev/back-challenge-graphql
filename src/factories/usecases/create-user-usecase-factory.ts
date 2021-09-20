import { CreateUser } from '@/application/protocols/usecases'
import { CreateUserUseCase } from '@/application/usecases'
import { DbCreateUserRepository } from '@/drivers/db/mysql/repositories'

export const makeCreateUserUseCase = (): CreateUser => {
  return new CreateUserUseCase(new DbCreateUserRepository())
}
