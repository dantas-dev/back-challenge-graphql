/* eslint-disable @typescript-eslint/no-unused-vars */
import { container } from "tsyringe";
import { Arg, Mutation, Resolver } from "type-graphql";

import { CreateUserUseCase } from "../modules/user/useCases/CreateUserUseCase";
import { CreateUserInput } from "../schemas/createUserInput";
import { User } from "../schemas/user";

@Resolver((of) => User)
class UserResolver {
  @Mutation((returns) => User)
  async createUser(
    @Arg("UserInput") createUserInput: CreateUserInput
  ): Promise<User> {
    const createUserUseCase = container.resolve(CreateUserUseCase);
    const user = createUserUseCase.execute(createUserInput);

    return user;
  }
}

export { UserResolver };
