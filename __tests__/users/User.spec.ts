import { Connection, getConnection, getRepository, Repository } from 'typeorm';

import { gCall } from '../../src/shared/infra/http/graphqlTestCall';
import createConnection from '../../src/shared/infra/typeorm';

import User from '../../src/modules/users/infra/typeorm/entities/User';

import { createUserMutation } from './mutation';
import { usersQuery } from './query';

import factory from '../factory';

let connection: Connection;

let usersRepository: Repository<User>;

describe('UserResolver', () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();
  });

  beforeEach(async () => {
    await connection.query('DELETE FROM users');
    await connection.query('DELETE FROM projects');

    usersRepository = getRepository(User);
  });

  afterAll(async () => {
    const mainConnection = getConnection();

    await connection.close();
    await mainConnection.close();
  });

  it('should be able to create a new user', async () => {
    const user = await factory.attrs<User>('User');

    const response = await gCall({
      source: createUserMutation,
      variableValues: {
        createUserInput: {
          name: user.name,
          email: user.email,
        },
      },
    });

    expect(response.data).toMatchObject({
      createUser: expect.objectContaining({
        id: expect.any(Number),
        name: expect.stringContaining(user.name),
        email: expect.stringContaining(user.email),
      }),
    });
  });

  it('should not be able to create a new user with same email', async () => {
    const factoryUser = await factory.attrs<User>('User');

    const userOne = usersRepository.create(factoryUser);

    await usersRepository.save(userOne);

    const response = await gCall({
      source: createUserMutation,
      variableValues: {
        createUserInput: {
          name: factoryUser.name,
          email: factoryUser.email,
        },
      },
    });

    expect(response.data).toBeNull();
  });

  it('should be able list all users', async () => {
    const user = await factory.attrs<User>('User');

    await usersRepository.save(user);

    const response = await gCall({
      source: usersQuery,
    });

    expect(response).toMatchObject({
      data: expect.objectContaining({
        users: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(Number),
            name: expect.stringContaining(user.name),
            email: expect.stringContaining(user.email),
          }),
        ]),
      }),
    });
  });
});
