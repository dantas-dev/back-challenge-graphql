import 'reflect-metadata';

import CreateUsersService from '../../services/CreateUsersService';
import FakeUserRepository from '../FakeRepositories/FakeUserRepository';
import FindUserByEmailService from '../../services/FindUserByEmailService';

describe('FindUserByEmail', () => {
  it('should be able to find an user by Id', async () => {
    // Create user on Fake Repository
    const fakeUserRepository = new FakeUserRepository();
    const createUserService = new CreateUsersService(fakeUserRepository);
    const newUser = await createUserService.execute('Teste', 'teste@teste.com');

    // Search for the created user by ID
    const findUserByEmailService = new FindUserByEmailService(
      fakeUserRepository,
    );
    const foundUser = findUserByEmailService.execute(newUser.id!);

    expect(foundUser).toBeDefined();
  });
});
