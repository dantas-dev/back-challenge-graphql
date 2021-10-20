import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}
  @Mutation(() => User, {
    name: 'createUser',
  })
  create(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<User> {
    return this.usersService.create(createUserInput);
  }

  @Query(() => [User], {
    name: 'users',
  })
  async findAll(): Promise<User[]> {
    return await this.usersService.findAll();
  }
}
