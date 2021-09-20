import { CreateUserDto } from '@/application/usecases'
import { User } from '@/entities'

export interface CreateUserRepository {
  create: (data: CreateUserDto) => Promise<User>
}
