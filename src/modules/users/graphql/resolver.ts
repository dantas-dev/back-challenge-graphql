import { Arg, Mutation, Query, Resolver } from 'type-graphql';

import User from '../infra/typeorm/entities/User';
import UsersRepository from '../infra/typeorm/repositories/UsersRepository';

import UserInput from './input';

@Resolver()
export default class UserResolver {
  @Mutation(() => User)
  async createUser(
    @Arg('createUserInput', () => UserInput) createUserInput: UserInput,
  ) {
    const { name, email } = createUserInput;

    const userRepository = new UsersRepository();

    const user = await userRepository.create({
      name,
      email,
    });

    return user;
  }

  @Query(() => [User])
  async users() {
    const userRepository = new UsersRepository();

    return userRepository.findAll();
  }
}
