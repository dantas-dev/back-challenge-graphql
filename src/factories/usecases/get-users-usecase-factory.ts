import { GetUsers } from '@/application/protocols/usecases'
import { GetUsersUseCase } from '@/application/usecases'
import { DbGetUsersRepository } from '@/drivers/db/mysql/repositories'

export const makeGetUsersUseCase = (): GetUsers => {
  return new GetUsersUseCase(new DbGetUsersRepository())
}
