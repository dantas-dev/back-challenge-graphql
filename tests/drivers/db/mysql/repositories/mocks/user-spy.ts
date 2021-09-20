import { CreateUserRepository, GetUsersRepository } from '@/application/protocols/repositories'
import { CreateUserDto } from '@/application/usecases'
import { User } from '@/entities'
import { mockUser } from '@/tests/entities/mocks/mock-user'

export class CreateUserRepositorySpy implements CreateUserRepository {
  input: CreateUserDto
  result: User

  async create (data: CreateUserDto): Promise<User> {
    this.input = data
    this.result = mockUser()
    return this.result
  }
}

export class GetUsersRepositorySpy implements GetUsersRepository {
  result: User[]

  async getAll (): Promise<User[]> {
    this.result = [mockUser()]
    return this.result
  }
}
