// This class follows the SOLID Single Responsibility Principle.
// Its only purpose is to find an "User" by Id.

import { inject, injectable } from 'tsyringe';
import IUserDTO from '../dto/IUserDTO';
import IUsersRepository from '../repositoryInterface/IUsersRepository';

@injectable()
class FindUserByIdService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute(id: string): Promise<IUserDTO | undefined> {
    return this.usersRepository.findById(id);
  }
}

export default FindUserByIdService;
