import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { getRepository, Repository } from "typeorm";

import { User } from "../database/entities/User";
import { UserSchema } from "../schemas/UserSchema";

@Resolver(UserSchema)
class UserControllers {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  @Query((returns) => [User], { name: "users" })
  async find() {
    const allUsers = await this.repository.find();

    return allUsers;
  }

  @Mutation((returns) => User, { name: "createUser" })
  async createUser(@Arg("name") name: string, @Arg("email") email: string) {
    const newUser = await this.repository.create({
      name,
      email,
    });

    await this.repository.save(newUser);

    return newUser;
  }
}

export { UserControllers };
