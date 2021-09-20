import { User } from '@/entities'

export type Project = {
  id: number
  name: string
  price: number
  userId: number
  user?: User
}
