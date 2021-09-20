import { CreateUserRepository } from '@/application/protocols/repositories'
import { CreateUser } from '@/application/protocols/usecases'
import { CreateUserDto } from '@/application/usecases'
import { User } from '@/entities'

export class CreateUserUseCase implements CreateUser {
  constructor (
    private readonly repository: CreateUserRepository
  ) {}

  async create (data: CreateUserDto): Promise<User> {
    // const dto = new CreateUserDto(data)
    // if (!CreateUserDto.isValid(dto)) {
    //   return { data: undefined, error: 'invalid-data' }
    // }
    return await this.repository.create(data)
  }
}
