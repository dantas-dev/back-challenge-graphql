import { GetUsersRepository } from '@/application/protocols/repositories'
import UserModel from '@/drivers/db/mysql/models/user-model'
import { User } from '@/entities'

export class DbGetUsersRepository implements GetUsersRepository {
  async getAll (): Promise<User[]> {
    const result: User[] = await UserModel.findAll()
    return result
  }
}
