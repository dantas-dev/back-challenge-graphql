import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";

interface IUsersRepository {
  create({ name, email }: ICreateUserDTO): Promise<User>;
  list(): Promise<User[]>;
  findById(id: string): Promise<User>;
}

export { IUsersRepository };
