import { Project } from '@/entities'
import faker from 'faker'

export const mockProject = (id?: number): Project => ({
  id: id || faker.datatype.number(),
  name: faker.datatype.string(),
  price: faker.datatype.number(),
  userId: faker.datatype.number()
})
