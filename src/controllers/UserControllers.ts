import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { getRepository, Repository } from "typeorm";

import { User } from "../database/entities/User";

@Resolver(User)
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

  @Query((returns) => User, { name: "userById" })
  async findUserById(@Arg("id") id: string) {
    const user = await this.repository.findOne(id);

    if (!user) {
      throw new Error("User not found!");
    }

    return user;
  }

  @Mutation((returns) => User, { name: "createUser" })
  async createUser(@Arg("name") name: string, @Arg("email") email: string) {
    const newUser = this.repository.create({
      name,
      email,
    });

    await this.repository.save(newUser);

    return newUser;
  }

  @Mutation((returns) => String, { name: "deleteUser" })
  async deleteUser(@Arg("id") id: string) {
    const user = await this.repository.findOne(id);

    if (!user) {
      throw new Error("User not found!");
    }

    await this.repository.delete(user);

    return "User deleted!";
  }
}

export { UserControllers };
