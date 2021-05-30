/* eslint-disable @typescript-eslint/no-unused-vars */
import { container } from "tsyringe";
import { Arg, Mutation, Query, Resolver } from "type-graphql";

import { CreateUserInput } from "../schemas/createUserInput";
import { User } from "../schemas/user";
import { CreateUserUseCase } from "../useCases/CreateUserUseCase";
import { ListUsersUseCase } from "../useCases/ListUsersUseCase";

@Resolver((of) => User)
class UserResolver {
  @Query((returns) => [User], { nullable: true })
  async listUsers(): Promise<User[]> {
    const listUsersUseCase = container.resolve(ListUsersUseCase);
    const users = await listUsersUseCase.execute();

    return users;
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
