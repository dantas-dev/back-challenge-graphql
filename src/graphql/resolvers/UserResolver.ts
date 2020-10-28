import { Arg, Mutation, Query, Resolver } from 'type-graphql';

import UserInput from '../types/UserTypes';

import User from '../../models/User';

@Resolver()
export default class UserResolver {
  @Mutation(() => User)
  async createUser(
    @Arg('options', () => UserInput) options: UserInput,
  ): Promise<User> {
    const user = await User.create(options).save();
    return user;
  }

  @Query(() => [User])
  user(): Promise<User[]> {
    return User.find();
  }
}
