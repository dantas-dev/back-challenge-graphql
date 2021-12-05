import 'reflect-metadata';

import CreateUsersService from '../../services/CreateUsersService';
import FakeUserRepository from '../FakeRepositories/FakeUserRepository';
import ListUsersService from '../../services/ListUsersService';

describe('ListAllUsers', () => {
  it('should be able to find all users', async () => {
    const fakeUserRepository = new FakeUserRepository();
    const createUserService = new CreateUsersService(fakeUserRepository);

    // Create
    await createUserService.execute('Teste1', 'teste1@teste.com');
    await createUserService.execute('Teste2', 'teste2@teste.com');
    await createUserService.execute('Teste3', 'teste3@teste.com');

    // Search for all users
    const listUsersService = new ListUsersService(fakeUserRepository);
    const foundUsers = await listUsersService.execute();

    expect(foundUsers).toHaveLength(3);
  });

  it('should be able to find users by name', async () => {
    const fakeUserRepository = new FakeUserRepository();
    const createUserService = new CreateUsersService(fakeUserRepository);

    // Create
    await createUserService.execute('Teste', 'teste1@teste.com');
    await createUserService.execute('Teste', 'teste2@teste.com');
    await createUserService.execute('Teste2', 'teste3@teste.com');

    // Search for all users by name
    const listUsersService = new ListUsersService(fakeUserRepository);
    const foundUsers = await listUsersService.execute(1, 2, 'Teste');

    expect(foundUsers).toHaveLength(2);
  });

  it('should not be able to find all users with negative pagination value on parameter "page"', async () => {
    const fakeUserRepository = new FakeUserRepository();

    // Search for all users with negative pagination on parameter page
    const listUsersService = new ListUsersService(fakeUserRepository);
    return listUsersService.execute(-1, 2).catch(err => {
      expect(err.message).toMatch('Parameter "page" must be greater than 0.');
    });
  });

  it('should not be able to find all users with negative pagination value on parameter "perPage"', async () => {
    const fakeUserRepository = new FakeUserRepository();

    // Search for all users with negative pagination on parameter perPage
    const listUsersService = new ListUsersService(fakeUserRepository);
    return listUsersService.execute(1, -1).catch(err => {
      expect(err.message).toMatch(
        'Parameter "perPage" must be greater than 0.',
      );
    });
  });

  it('should be able to find all users with pagination', async () => {
    const fakeUserRepository = new FakeUserRepository();
    const createUserService = new CreateUsersService(fakeUserRepository);

    // Create some users
    await createUserService.execute('Teste1', 'teste1@teste.com');
    await createUserService.execute('Teste2', 'teste2@teste.com');
    await createUserService.execute('Teste3', 'teste3@teste.com');
    await createUserService.execute('Teste4', 'teste4@teste.com');
    await createUserService.execute('Teste4', 'teste5@teste.com');

    // Search for all users with pagination
    const listUsersService = new ListUsersService(fakeUserRepository);
    const usersPaginated = await listUsersService.execute(1, 2);

    expect(usersPaginated).toHaveLength(2);
  });
});
