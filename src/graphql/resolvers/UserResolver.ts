import { Arg, Int, Mutation, Query, Resolver } from 'type-graphql';

import UserInput from '../types/UserTypes';

import User from '../../models/User';

@Resolver()
export class UserResolver {
  @Mutation(() => User)
  async createUser(
    @Arg('options', () => UserInput) options: UserInput,
  ) {
    const user = await User.create(options).save();
    return user;
  }

  @Query(() => [User])
  async user(
    @Arg('currentPage', () => Int) currentPage: number,
  ) {
    const users = await User.find();
    const current = currentPage * 50;

    return users.slice(current, current + 50);
  }
}
