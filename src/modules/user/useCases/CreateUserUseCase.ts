import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";
import { IUsersRepository } from "../repositories/IUserRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepositoryPG")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ name, email }: ICreateUserDTO): Promise<User> {
    const emailAlreadyInUse = await this.usersRepository.findByEmail(email);
    if (emailAlreadyInUse) {
      throw new Error("Email already in use!");
    }
    const user = await this.usersRepository.create({ name, email });
    return user;
  }
}

export { CreateUserUseCase };
