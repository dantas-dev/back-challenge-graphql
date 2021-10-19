import { Resolver, Mutation } from '@nestjs/graphql';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}
  @Mutation('createUser')
  create(createUserInput: CreateUserInput): User {
    return new User();
  }
}
