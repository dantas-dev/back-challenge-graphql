import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

@Resolver('User')
export class UsersResolver {
  @Mutation('createUser')
  create() {
    return 'Retorna um novo usuario salvo no banco de dados';
  }
}
