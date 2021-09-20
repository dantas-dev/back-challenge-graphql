import { GetUsersRepository } from '@/application/protocols/repositories'
import { GetUsers } from '@/application/protocols/usecases'
import { User } from '@/entities'

export class GetUsersUseCase implements GetUsers {
  constructor (
    private readonly repository: GetUsersRepository
  ) { }

  async getAll (): Promise<User[]> {
    return await this.repository.getAll()
  }
}
