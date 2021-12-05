// This class follows the SOLID Single Responsibility Principle.
// Its only purpose is to create a new "Users" entry in the database.

// This class also uses the SOLID Dependecy Inversion Principle using the library tsyringe, making dependency injections.

import { inject, injectable } from 'tsyringe';
import IUserDTO from '../dto/IUserDTO';
import IUsersRepository from '../repositoryInterface/IUsersRepository';

@injectable()
class CreateUsersService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute(name: string, email: string): Promise<IUserDTO> {
    try {
      if (name === '') {
        throw new Error('Parameter "name" of user cannot be empty.');
      }

      if (email === '') {
        throw new Error('Parameter "email" of user cannot be empty.');
      }

      const foundUser = await this.usersRepository.findUserbyEmail(email);
      if (foundUser) {
        throw new Error('This e-mail already exists on database.');
      }

      return this.usersRepository.create(name, email);
    } catch (err: any) {
      throw new Error(`Error creating new user: ${err.message}`);
    }
  }
}

export default CreateUsersService;
