import { Connection, getConnection, getRepository, Repository } from 'typeorm';

import { gCall } from '../../src/shared/infra/http/graphqlTestCall';
import createConnection from '../../src/shared/infra/typeorm';

import User from '../../src/modules/users/infra/typeorm/entities/User';
import Project from '../../src/modules/projects/infra/typeorm/entities/Project';

import { createProjectMutation } from './mutation';
import { projectsQuery, projectByIdQuery } from './query';

import factory from '../factory';

let connection: Connection;

let usersRepository: Repository<User>;
let projectsRepository: Repository<Project>; // kkkkkkkkkkkkkkkkkkkkkkkkkkk

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
    const user = await factory.attrs<User>('User');

    await usersRepository.save(user);

    const project = await factory.attrs<Project>('Project', {
      user_id: user.id,
    });

    const response = await gCall({
      source: createProjectMutation,
      variableValues: {
        projectInput: {
          name: project.name,
          price: project.price,
          user_id: user.id,
        },
      },
    });

    expect(project.user_id).toBe(user.id);
    expect(response.data).toMatchObject({
      createProject: expect.objectContaining({
        id: expect.anything(),
        name: expect.stringContaining(project.name),
        price: expect.anything(),
      }),
    });
  });

  it('should be able list all projects', async () => {
    const user = await factory.attrs<User>('User');

    await usersRepository.save(user);

    const factoryProject = await factory.attrs<Project>('Project', {
      user_id: user.id,
    });

    const project = projectsRepository.create({
      name: factoryProject.name,
      price: factoryProject.price,
      user_id: user.id,
    });

    await projectsRepository.save(project);

    const response = await gCall({
      source: projectsQuery,
      variableValues: {
        projectInputByName: {
          name: project.name,
          limit: 10,
          page: 0,
        },
      },
    });

    expect(response.data).toMatchObject({
      projects: expect.arrayContaining([
        expect.objectContaining({
          id: expect.anything(),
          name: expect.stringContaining(project.name),
          price: expect.anything(),
        }),
      ]),
    });
  });

  it('should be able list one project filter per id', async () => {
    const user = await factory.attrs<User>('User');

    await usersRepository.save(user);

    const factoryProject = await factory.attrs<Project>('Project', {
      user_id: user.id,
    });

    const project = projectsRepository.create({
      name: factoryProject.name,
      price: factoryProject.price,
      user_id: user.id,
    });

    await projectsRepository.save(project);

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
        id: expect.anything(),
        name: expect.stringContaining(project.name),
        price: expect.anything(),
      }),
    });
  });

  it('should not be able list one project without user', async () => {
    const response = await gCall({
      source: projectByIdQuery,
      variableValues: {
        options: {
          id: 9999,
        },
      },
    });

    expect(response.data).toBeNull();
  });

  it('should be able list one project without informed fields', async () => {
    const user = await factory.attrs<User>('User');

    await usersRepository.save(user);

    const factoryProject = await factory.attrs<Project>('Project', {
      user_id: user.id,
    });

    const project = projectsRepository.create({
      name: factoryProject.name,
      price: factoryProject.price,
      user_id: user.id,
    });

    await projectsRepository.save(project);

    const response = await gCall({
      source: projectsQuery,
      variableValues: {
        projectInputByName: {},
      },
    });

    expect(response.data).toMatchObject({
      projects: expect.arrayContaining([
        expect.objectContaining({
          id: expect.anything(),
          name: expect.stringContaining(project.name),
          price: expect.anything(),
        }),
      ]),
    });
  });

  it('should not be able create project with same name', async () => {
    const user = await factory.attrs<User>('User');

    await usersRepository.save(user);

    const factoryProject = await factory.attrs<Project>('Project', {
      user_id: user.id,
    });

    const fieldsProject = {
      name: factoryProject.name,
      price: factoryProject.price,
      user_id: user.id,
    };

    const projectOne = projectsRepository.create(fieldsProject);

    await projectsRepository.save(projectOne);

    const response = await gCall({
      source: createProjectMutation,
      variableValues: {
        projectInput: fieldsProject,
      },
    });

    expect(response.data).toBeNull();
  });
});
