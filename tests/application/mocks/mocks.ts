import { CreateProjectDto, CreateUserDto } from '@/application/usecases'
import faker from 'faker'

export const mockCreateUserDto = (): CreateUserDto => ({
  name: faker.name.findName(),
  email: faker.internet.email()
})

export const mockCreateProjectDto = (userId?: number): CreateProjectDto => ({
  name: faker.name.findName(),
  price: faker.datatype.number(),
  userId: userId || faker.datatype.number()
})
