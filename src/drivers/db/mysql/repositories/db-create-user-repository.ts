import { CreateUserRepository } from '@/application/protocols/repositories'
import { CreateUserDto } from '@/application/usecases'
import UserModel from '@/drivers/db/mysql/models/user-model'
import { User } from '@/entities'
import { MissingParamError } from '@/presentation/errors'
import { DatabaseError } from 'sequelize'

export class DbCreateUserRepository implements CreateUserRepository {
  async create (data: CreateUserDto): Promise<User> {
    try {
      const created: User = await UserModel.create(data)
      return created
    } catch (error) {
      if (error instanceof DatabaseError) {
        throw new MissingParamError('')
      }
    }
  }
}
