import { adaptResolver } from '@/drivers/api/adapters'
import { makeCreateUserController } from '@/factories/controllers/create-user-controller-factory'
import { makeGetUsersController } from '@/factories/controllers/get-users-controller-factory'

export default {
  Query: {
    users: async (_parent: any, args: any, context: any) => adaptResolver(makeGetUsersController(), args, context)
  },

  Mutation: {
    createUser: async (_parent: any, args: any, context: any) => adaptResolver(makeCreateUserController(), args, context)
  }
}
