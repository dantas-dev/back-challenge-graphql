import { Arg, Field, InputType, Int, Mutation, Query, Resolver } from 'type-graphql';

import User from '../../models/User';

@InputType()
class UserInput {
    @Field()
    name: string;

    @Field()
    email: string;
}

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