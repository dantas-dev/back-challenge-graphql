import { Arg, Field, InputType, Mutation, Query, Resolver } from 'type-graphql';

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
    async createUser(@Arg("options", () => UserInput) options: UserInput) {
        const user = await User.create(options).save();
        return user;
    }

    @Query(() => [User])
    user() {
        return User.find();
    }
}