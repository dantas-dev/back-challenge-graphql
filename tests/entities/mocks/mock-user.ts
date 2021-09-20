import { User } from '@/entities'
import faker from 'faker'

export const mockUser = (id?: number): User => ({
  id: id || faker.datatype.number(),
  name: faker.datatype.string(),
  email: faker.datatype.string()
})
