import { getRepository, Like } from 'typeorm';

import IUserDTO from '@modules/users/dto/IUserDTO';

import User from '../entities/User';

import BaseRepository from '@modules/base/infra/typeorm/repositoryImplementation/BaseRepository';
import IUsersRepository from '@modules/users/repositoryInterface/IUsersRepository';

class UsersRepository extends BaseRepository implements IUsersRepository {
  constructor() {
    super();
    this.ormRepository = getRepository(User);
  }

  public async create(name: string, email: string): Promise<IUserDTO> {
    return this.ormRepository.save({ name, email });
  }

  public async findUserbyEmail(email: string): Promise<IUserDTO | undefined> {
    return this.ormRepository.findOne({ where: { email } });
  }
}

export default UsersRepository;
