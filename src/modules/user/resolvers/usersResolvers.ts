/* eslint-disable @typescript-eslint/no-unused-vars */
import { container } from "tsyringe";
import { Arg, Args, Mutation, Query, Resolver } from "type-graphql";

import { CreateUserInput } from "../schemas/createUserInput";
import { ListUsersArgs } from "../schemas/listUsersArgs";
import { User } from "../schemas/user";
import { CreateUserUseCase } from "../useCases/CreateUserUseCase";
import { ListUsersUseCase } from "../useCases/ListUsersUseCase";

@Resolver((of) => User)
class UserResolver {
  @Query((returns) => [User], { nullable: true })
  async listUsers(
    @Args() { name, email, startIndex, endIndex }: ListUsersArgs
  ): Promise<User[]> {
    const listUsersUseCase = container.resolve(ListUsersUseCase);
    let users = await listUsersUseCase.execute();

    if (name) {
      users = users.filter((user) => user.name === name);
    }

    if (email) {
      users = users.filter((user) => user.email === email);
    }

    return users.slice(startIndex, endIndex);
  }

  @Mutation((returns) => User)
  async createUser(
    @Arg("UserInput") createUserInput: CreateUserInput
  ): Promise<User> {
    const createUserUseCase = container.resolve(CreateUserUseCase);
    const user = await createUserUseCase.execute(createUserInput);

    return user;
  }
}

export { UserResolver };
