
import { Controller, HttpRequest } from '@/presentation/protocols'
import { UserInputError, AuthenticationError, ForbiddenError, ApolloError } from 'apollo-server-express'

export const adaptResolver = async (controller: Controller, args?: any, _context?: any): Promise<any> => {
  const httpRequest: HttpRequest = {
    body: args || {}
  }
  const httpResponse = await controller.handle(httpRequest)
  switch (httpResponse.code) {
    case 200:
    case 201:
    case 204: return httpResponse.body
    case 400: throw new UserInputError(httpResponse.body.message)
    case 401: throw new AuthenticationError(httpResponse.body.message)
    case 403: throw new ForbiddenError(httpResponse.body.message)
    default: throw new ApolloError(httpResponse.body.message)
  }
}
