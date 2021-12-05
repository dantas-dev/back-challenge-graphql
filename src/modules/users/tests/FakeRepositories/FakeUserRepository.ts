import IUserDTO from '../../dto/IUserDTO';

import { v4 as uuidv4 } from 'uuid';

class FakeUserRepository {
  private users: IUserDTO[] = [];

  public async create(name: string, email: string): Promise<IUserDTO> {
    const newUser: IUserDTO = {
      id: uuidv4(),
      name,
      email,
    };

    this.users.push(newUser);

    return newUser;
  }

  public async findAll(
    page?: number,
    perPage?: number,
    name?: string,
  ): Promise<IUserDTO[]> {
    if (page === 0 && perPage === 0 && name) {
      return this.users.filter(u => u.name === name);
    } else if (page && perPage) {
      return this.users.slice(page - 1, perPage);
    }

    return this.users;
  }

  public async findById(id: string): Promise<IUserDTO | undefined> {
    const foundUser = this.users.find(u => u.id === id);
    return foundUser;
  }

  public async findUserbyEmail(email: string): Promise<IUserDTO | undefined> {
    const foundUser = this.users.find(u => u.email === email);
    return foundUser;
  }
}

export default FakeUserRepository;
