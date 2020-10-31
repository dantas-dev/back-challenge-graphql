import { getRepository, Repository } from 'typeorm';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';

import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import User from '../entities/User';

export default class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async findAll(): Promise<User[]> {
    return this.ormRepository.find();
  }

  public async create({ name, email }: ICreateUserDTO): Promise<User> {
    const existUser = await this.ormRepository.findOne({ where: { email } });

    if (existUser) {
      throw new Error('User already exists');
    }

    const user = this.ormRepository.create({
      name,
      email,
    });

    await this.ormRepository.save(user);

    return user;
  }
}
