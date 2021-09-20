import { User } from '@/entities'

export interface GetUsersRepository {
  getAll: () => Promise<User[]>
}
