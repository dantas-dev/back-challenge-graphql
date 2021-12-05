import 'reflect-metadata';

import IUserDTO from '../../../users/dto/IUserDTO';
import CreateUsersService from '../../../users/services/CreateUsersService';
import FakeUserRepository from '../../../users/tests/FakeRepositories/FakeUserRepository';

import CreateProjectsService from '../../services/CreateProjectsService';
import FakeProjectRepository from '../FakeRepositories/FakeProjectRepository';

describe('CreateProject', () => {
  const fakeProjectRepository = new FakeProjectRepository();
  const createProjectService = new CreateProjectsService(fakeProjectRepository);

  it('should not be able to create a new project with empty name', async () => {
    return createProjectService.execute('', 50, {} as IUserDTO).catch(err => {
      expect(err.message).toMatch(
        'Error creating new project: Parameter "name" of project cannot be empty.',
      );
    });
  });

  it('should not be able to create a new project with valor equal or lower than 0', async () => {
    const fakeProjectRepository = new FakeProjectRepository();
    const createProjectService = new CreateProjectsService(
      fakeProjectRepository,
    );

    return createProjectService
      .execute('Projeto 1', 0, {} as IUserDTO)
      .catch(err => {
        expect(err.message).toMatch(
          'Error creating new project: Parameter "price" of project must be greater than 0.',
        );
      });
  });

  it('should not be able to create a new project with valor equal or lower than 0', async () => {
    const fakeProjectRepository = new FakeProjectRepository();
    const createProjectService = new CreateProjectsService(
      fakeProjectRepository,
    );

    return createProjectService
      .execute('Projeto 1', 0, {} as IUserDTO)
      .catch(err => {
        expect(err.message).toMatch(
          'Error creating new project: Parameter "price" of project must be greater than 0.',
        );
      });
  });

  it('should be able to create a new project including pser', async () => {
    const fakeProjectRepository = new FakeProjectRepository();
    const createProjectService = new CreateProjectsService(
      fakeProjectRepository,
    );

    const fakeUserRepository = new FakeUserRepository();
    const createUserService = new CreateUsersService(fakeUserRepository);

    const newUser = await createUserService.execute('Teste', 'teste@teste.com');

    const newProject = await createProjectService.execute(
      'Projeto Teste',
      50,
      newUser,
    );

    newProject.user = newUser;

    expect(newProject).toHaveProperty('id');
    expect(newProject).toHaveProperty('name');
    expect(newProject.name).toBe('Projeto Teste');
    expect(newProject).toHaveProperty('price');
    expect(newProject.price).toBe(50);
    expect(newProject).toHaveProperty('user');
    expect(newProject.user).toHaveProperty('id');
    expect(newProject.user).toHaveProperty('name');
    expect(newProject.user.name).toBe('Teste');
    expect(newProject.user).toHaveProperty('email');
    expect(newProject.user.email).toBe('teste@teste.com');
  });
});
