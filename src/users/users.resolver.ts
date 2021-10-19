import { Resolver, Mutation } from '@nestjs/graphql';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './entities/user.entity';

@Resolver('User')
export class UsersResolver {
  @Mutation('createUser')
  create(createUserInput: CreateUserInput): User {
    return new User();
  }
}
