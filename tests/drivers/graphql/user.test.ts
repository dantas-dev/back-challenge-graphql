import { makeApolloServer } from '@/tests/drivers/graphql/helpers'
import { ApolloServer, gql } from 'apollo-server-express'
import { createTestClient } from 'apollo-server-integration-testing'
import { Connection } from '@/drivers/db/mysql/helpers/connection'
import { Op } from 'sequelize'
import { mockCreateUserDto } from '@/tests/application/mocks/mocks'
import UserModel from '@/drivers/db/mysql/models/user-model'
import { migrationsDown, migrationsUp } from '@/tests/drivers/db/mysql/helpers/run-migrations'

let apolloServer: ApolloServer

describe('Project GraphQL', () => {
  beforeAll(async () => {
    apolloServer = makeApolloServer()
    await Connection.getInstance().connect()
    await migrationsUp()
  })

  afterAll(async () => {
    await migrationsDown()
    await Connection.getInstance().disconnect()
  })

  beforeEach(async () => {
    await UserModel.destroy({ where: { id: { [Op.not]: null } } })
  })

  describe('Project Query', () => {
    const userQuery = gql`
      query users {
        users {
          id
          name
          email
        }
      }
    `

    test('Should return a List of Users', async () => {
      const mockUser = mockCreateUserDto()
      await UserModel.create(mockUser)

      const { query } = createTestClient({ apolloServer })

      // TODO: Colocar os parametros de filtro  e paginacao aqui
      const res: any = await query(userQuery)
      // , {
      //   variables: {
      //     limit: 10,
      //    offset: 1
      //    }
      // })
      expect(res.data.users).toBeTruthy()
      expect(res.data.users[0].name).toBe(mockUser.name)
    })
  })

  describe('User Mutation', () => {
    const userMutation = gql`
    mutation ($name: String!, $email: String!) {
      createUser(name: $name, email: $email) { id, name }
    }
    `

    test('Should return an Account on valid data', async () => {
      const mockUser = mockCreateUserDto()

      const { mutate } = createTestClient({ apolloServer })
      const res: any = await mutate(userMutation, {
        variables: mockUser
      })
      expect(res.data.createUser.id).toBeTruthy()
      expect(res.data.createUser.name).toBe(mockUser.name)
    })
  })
})
