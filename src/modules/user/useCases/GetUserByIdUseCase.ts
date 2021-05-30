import { inject, injectable } from "tsyringe";

import { User } from "../entities/User";
import { IUsersRepository } from "../repositories/IUserRepository";

@injectable()
class GetUserByIdUseCase {
  constructor(
    @inject("UsersRepositoryPG")
    private usersRepository: IUsersRepository
  ) {}

  async execute(id: string): Promise<User> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new Error(`No user found with id: ${id}`);
    }

    return user;
  }
}

export { GetUserByIdUseCase };
