import { getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUserRepository";

class UsersRepositoryPG implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({ name, email }: ICreateUserDTO): Promise<User> {
    const user = this.repository.create({ name, email });
    await this.repository.save(user);

    return user;
  }
  async list(): Promise<User[]> {
    const users = await this.repository.find();
    return users;
  }
  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne(id);
    return user;
  }
}

export { UsersRepositoryPG };
