import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './entities/users.entity';
import { UsersService } from './users.service';

@Resolver(of => User)
export class UsersResolver {
    constructor(private usersService: UsersService){}

    @Query(() => [User], {
      name: 'users',
    })
    async findAll(): Promise<User[]> {
      return await this.usersService.findAll();
    }
    @Query(() => User, {
      name: 'user',
    })
    async findOneById(@Args('id') id: number) {
      return await this.usersService.findOneById(id);
    }
    
    @Mutation(() => User, {
        name: 'createUser',
      })
      create(
        @Args('createUserInput') createUserInput: CreateUserInput,
      ): Promise<User> {
        return this.usersService.create(createUserInput);
      }
}
