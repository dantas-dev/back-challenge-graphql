import { User } from '@/entities'

export interface GetUsers {
  getAll: () => Promise<User[]>
}
