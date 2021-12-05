// This class follows the SOLID Single Responsibility Principle.
// Its only purpose is to list the "Users" entries in the database.

import { inject, injectable } from 'tsyringe';
import IUserDTO from '../dto/IUserDTO';
import IUsersRepository from '../repositoryInterface/IUsersRepository';

@injectable()
class ListUsersService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute(
    page?: number,
    perPage?: number,
    name?: string,
  ): Promise<IUserDTO[]> {
    if (page !== undefined && page <= 0) {
      throw new Error('Parameter "page" must be greater than 0.');
    }

    if (perPage !== undefined && perPage <= 0) {
      throw new Error('Parameter "perPage" must be greater than 0.');
    }

    return this.usersRepository.findAll(page, perPage, name);
  }
}

export default ListUsersService;
