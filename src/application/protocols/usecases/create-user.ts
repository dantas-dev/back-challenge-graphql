import { User } from '@/entities'

export interface CreateUser {
  create: (data: User) => Promise<User>
}
