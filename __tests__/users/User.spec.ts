import { Connection, getConnection, getRepository, Repository } from 'typeorm';
import User from '../../src/modules/users/infra/typeorm/entities/User';

import { gCall } from '../../src/shared/infra/http/graphqlTestCall';
import createConnection from '../../src/shared/infra/typeorm';

import { createUserMutation } from './mutation';
import { usersQuery } from './query';

let connection: Connection;
let usersRepository: Repository<User>;

describe('UserResolver', () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();
  });

  beforeEach(async () => {
    await connection.query('DELETE FROM users');

    usersRepository = getRepository(User);
  });

  afterAll(async () => {
    const mainConnection = getConnection();

    await connection.close();
    await mainConnection.close();
  });

  it('should be able to create a new user', async () => {
    const response = await gCall({
      source: createUserMutation,
      variableValues: {
        createUserInput: {
          name: 'John Doe',
          email: 'johndoe@email.com',
        },
      },
    });

    expect(response.data).toMatchObject({
      createUser: expect.objectContaining({
        id: expect.any(Number),
        name: expect.stringContaining('John Doe'),
        email: expect.stringContaining('johndoe@email.com'),
      }),
    });
  });

  it('should be able list all users', async () => {
    const user = usersRepository.create({
      name: 'John Doe',
      email: 'johndoe@email.com',
    });

    await user.save();

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
