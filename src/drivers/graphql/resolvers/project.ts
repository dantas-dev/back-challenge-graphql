import { adaptResolver } from '@/drivers/api/adapters'
import { makeCreateProjectController } from '@/factories/controllers/create-project-controller-factory'
import { makeGetProjectsController } from '@/factories/controllers/get-projects-controller-factory'

export default {
  Query: {
    projects: async (_parent: any, args: any) => adaptResolver(makeGetProjectsController(), args)
  },

  Mutation: {
    createProject: async (_parent: any, args: any) => adaptResolver(makeCreateProjectController(), args)
  }
}
