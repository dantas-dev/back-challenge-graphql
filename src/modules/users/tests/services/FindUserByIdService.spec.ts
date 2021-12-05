import 'reflect-metadata';

import CreateUsersService from '../../services/CreateUsersService';
import FakeUserRepository from '../FakeRepositories/FakeUserRepository';
import FindUserByIdService from '../../services/FindUserByIdService';

describe('FindUserById', () => {
  it('should be able to find an user by id', async () => {
    // Create user on Fake Repository
    const fakeUserRepository = new FakeUserRepository();
    const createUserService = new CreateUsersService(fakeUserRepository);
    const newUser = await createUserService.execute('Teste', 'teste@teste.com');

    // Search for the created user by ID
    const findUserByIdService = new FindUserByIdService(fakeUserRepository);
    const foundUser = findUserByIdService.execute(newUser.id!);

    expect(foundUser).toBeDefined();
  });
});
