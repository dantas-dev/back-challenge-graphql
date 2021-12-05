import 'reflect-metadata';

import CreateUsersService from '../../services/CreateUsersService';
import FakeUserRepository from '../FakeRepositories/FakeUserRepository';

describe('CreateUser', () => {
  const fakeUserRepository = new FakeUserRepository();
  const createUserService = new CreateUsersService(fakeUserRepository);

  it('should not be able to create a new user with empty name', async () => {
    return createUserService.execute('', 'teste@teste.com').catch(err => {
      expect(err.message).toMatch(
        'Error creating new user: Parameter "name" of user cannot be empty.',
      );
    });
  });

  it('should not be able to create a new user with empty email', async () => {
    const fakeUserRepository = new FakeUserRepository();
    const createUserService = new CreateUsersService(fakeUserRepository);

    return createUserService.execute('Teste', '').catch(err => {
      expect(err.message).toMatch(
        'Error creating new user: Parameter "email" of user cannot be empty.',
      );
    });
  });

  it('should not be able to create a new user with an existing email', async () => {
    const fakeUserRepository = new FakeUserRepository();
    const createUserService = new CreateUsersService(fakeUserRepository);

    await createUserService.execute('Teste', 'teste@teste.com');

    return createUserService.execute('Teste', 'teste@teste.com').catch(err => {
      expect(err.message).toMatch(
        'Error creating new user: This e-mail already exists on database.',
      );
    });
  });

  it('should be able to create a new user', async () => {
    const newUser = await createUserService.execute('Teste', 'teste@teste.com');

    expect(newUser).toHaveProperty('id');
    expect(newUser).toHaveProperty('name');
    expect(newUser.name).toBe('Teste');
    expect(newUser).toHaveProperty('email');
    expect(newUser.email).toBe('teste@teste.com');
  });
});
