import { makeApolloServer } from '@/tests/drivers/graphql/helpers'
import { ApolloServer, gql } from 'apollo-server-express'
import { createTestClient } from 'apollo-server-integration-testing'
import { Connection } from '@/drivers/db/mysql/helpers/connection'
import ProjectModel from '@/drivers/db/mysql/models/project-model'
import { Op } from 'sequelize'
import { mockCreateProjectDto, mockCreateUserDto } from '@/tests/application/mocks/mocks'
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
    await ProjectModel.destroy({ where: { id: { [Op.not]: null } } })
  })

  describe('Project Query', () => {
    const projectQuery = gql`
      query projects {
        projects {
          id
          name
          price
          user {
            id
            name
            email
          }
        }
      }
    `

    test('Should return a List of Projects', async () => {
      const mockUser = mockCreateUserDto()
      const user = await UserModel.create(mockUser)
      const mockProjeto = mockCreateProjectDto(user.id)
      await ProjectModel.create(mockProjeto)

      const { query } = createTestClient({ apolloServer })

      // TODO: Colocar os parametros de filtro  e paginacao aqui
      const res: any = await query(projectQuery)
      // , {
      //   variables: {
      //     limit: 10,
      //    offset: 1
      //    }
      // })
      expect(res.data.projects).toBeTruthy()
      expect(res.data.projects[0].name).toBe(mockProjeto.name)
    })
  })

  describe('Project Mutation', () => {
    const projectMutation = gql`
    mutation ($name: String!, $price: Float!, $userId: Int!) {
      createProject(name: $name, price: $price, userId: $userId) { id, name }
    }
    `

    test('Should return an Account on valid data', async () => {
      const mockUser = mockCreateUserDto()
      const user = await UserModel.create(mockUser)
      const mockRequest = mockCreateProjectDto(user.id)
      const { mutate } = createTestClient({ apolloServer })
      const res: any = await mutate(projectMutation, {
        variables: mockRequest
      })
      expect(res.data.createProject.id).toBeTruthy()
      expect(res.data.createProject.name).toBe(mockRequest.name)
    })
  })
})
