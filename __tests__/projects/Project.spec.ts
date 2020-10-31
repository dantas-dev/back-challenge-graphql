import { Connection, getConnection, getRepository, Repository } from 'typeorm';
import User from '../../src/modules/users/infra/typeorm/entities/User';
import Project from '../../src/modules/projects/infra/typeorm/entities/Project';

import { gCall } from '../../src/shared/infra/http/graphqlTestCall';
import createConnection from '../../src/shared/infra/typeorm';

import { createProjectMutation } from './mutation';
import { projectsQuery, projectByIdQuery } from './query';

let connection: Connection;

let usersRepository: Repository<User>;
let projectsRepository: Repository<Project>;

let user: User;
let project: Project;

describe('ProjectResolver', () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();
  });

  beforeEach(async () => {
    await connection.query('DELETE FROM users');
    await connection.query('DELETE FROM projects');

    usersRepository = getRepository(User);
    projectsRepository = getRepository(Project);
  });

  afterAll(async () => {
    const mainConnection = getConnection();

    await connection.close();
    await mainConnection.close();
  });

  it('should be able to create a new project', async () => {
    user = usersRepository.create({
      name: 'John Doe',
      email: 'johndoe@email.com',
    });

    await user.save();

    const response = await gCall({
      source: createProjectMutation,
      variableValues: {
        projectInput: {
          name: 'John Doe',
          price: 69.9,
          user_id: user.id,
        },
      },
    });

    expect(response.data).toMatchObject({
      createProject: expect.objectContaining({
        id: expect.any(Number),
        name: expect.stringContaining('John Doe'),
        price: expect.any(Number),
      }),
    });
  });

  it('should be able list all projects', async () => {
    user = usersRepository.create({
      name: 'John Doe',
      email: 'johndoe@email.com',
    });

    await user.save();

    project = projectsRepository.create({
      name: 'project test',
      price: 59.9,
      user_id: user.id,
    });

    await project.save();

    const response = await gCall({
      source: projectsQuery,
      variableValues: {
        projectInputByName: {
          name: 'project test',
          limit: 3,
          page: 0,
        },
      },
    });

    expect(response.data).toMatchObject({
      projects: expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          name: expect.stringContaining('project test'),
          price: expect.any(Number),
        }),
      ]),
    });
  });

  it('should be able list one project filter per id', async () => {
    user = usersRepository.create({
      name: 'John Doe',
      email: 'johndoe@email.com',
    });

    await user.save();

    project = projectsRepository.create({
      name: 'project test',
      price: 59.9,
      user_id: user.id,
    });

    await project.save();

    const response = await gCall({
      source: projectByIdQuery,
      variableValues: {
        options: {
          id: project.id,
        },
      },
    });

    expect(response.data).toMatchObject({
      project: expect.objectContaining({
        id: expect.any(Number),
        name: expect.stringContaining('project test'),
        price: expect.any(Number),
      }),
    });
  });
});
