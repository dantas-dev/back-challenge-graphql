/* eslint-disable @typescript-eslint/no-unused-vars */
import { container } from "tsyringe";
import { Arg, Mutation, Query, Resolver } from "type-graphql";

import { CreateUserUseCase } from "../modules/user/useCases/CreateUserUseCase";
import { ListUsersUseCase } from "../modules/user/useCases/ListUsersUseCase";
import { CreateUserInput } from "../schemas/createUserInput";
import { User } from "../schemas/user";

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
