import { CreateUser, GetUsers } from '@/application/protocols/usecases'
import { CreateUserDto } from '@/application/usecases'
import { User } from '@/entities'
import { mockUser } from '@/tests/entities/mocks/mock-user'

export class CreateUserUseCaseSpy implements CreateUser {
  input: any
  result = mockUser(1)

  async create (data: CreateUserDto): Promise<User> {
    this.input = data
    return this.result
  }
}

export class GetUsersUseCaseSpy implements GetUsers {
  result =[mockUser()]

  async getAll (): Promise<User[]> {
    return this.result
  }
}
