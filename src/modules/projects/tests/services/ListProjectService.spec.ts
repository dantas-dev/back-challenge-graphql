import 'reflect-metadata';

import CreateProjectsService from '../../services/CreateProjectsService';
import FakeProjectRepository from '../FakeRepositories/FakeProjectRepository';
import ListProjectsService from '../../services/ListProjectsService';

describe('ListAllProjects', () => {
  it('should be able to find all Projects', async () => {
    const fakeProjectRepository = new FakeProjectRepository();
    const createProjectService = new CreateProjectsService(
      fakeProjectRepository,
    );

    // Create some projects
    await createProjectService.execute('ProjetoTeste1', 50, {
      id: '12345',
      name: 'Teste1',
      email: 'teste1@teste.com',
    });
    await createProjectService.execute('ProjetoTeste2', 100, {
      id: '54321',
      name: 'Teste2',
      email: 'teste2@teste.com',
    });
    await createProjectService.execute('ProjetoTeste3', 200, {
      id: '51234',
      name: 'Teste3',
      email: 'teste3@teste.com',
    });

    // Search for all Projects
    const listProjectService = new ListProjectsService(fakeProjectRepository);
    const foundProjects = await listProjectService.execute();

    expect(foundProjects).toHaveLength(3);
  });

  it('should be able to find Projects by name', async () => {
    const fakeProjectRepository = new FakeProjectRepository();
    const createProjectService = new CreateProjectsService(
      fakeProjectRepository,
    );

    // Create some projects
    await createProjectService.execute('ProjetoTeste1', 50, {
      id: '12345',
      name: 'Teste1',
      email: 'teste1@teste.com',
    });
    await createProjectService.execute('ProjetoTeste2', 100, {
      id: '54321',
      name: 'Teste2',
      email: 'teste2@teste.com',
    });
    await createProjectService.execute('ProjetoTeste3', 200, {
      id: '51234',
      name: 'Teste3',
      email: 'teste3@teste.com',
    });

    // Search for all Projects by name
    const listProjectService = new ListProjectsService(fakeProjectRepository);
    const foundProjects = await listProjectService.execute(
      1,
      1,
      'ProjetoTeste1',
    );

    expect(foundProjects).toHaveLength(1);
  });

  it('should not be able to find all projects with negative pagination value on parameter "page"', async () => {
    const fakeUserRepository = new FakeProjectRepository();

    // Search for all users with negative pagination on parameter page
    const listProjectsService = new ListProjectsService(fakeUserRepository);
    return listProjectsService.execute(-1, 2).catch(err => {
      expect(err.message).toMatch('Parameter "page" must be greater than 0.');
    });
  });

  it('should not be able to find all projects with negative pagination value on parameter "perPage"', async () => {
    const fakeUserRepository = new FakeProjectRepository();

    // Search for all users with negative pagination on parameter perPage
    const listProjectsService = new ListProjectsService(fakeUserRepository);
    return listProjectsService.execute(1, -1).catch(err => {
      expect(err.message).toMatch(
        'Parameter "perPage" must be greater than 0.',
      );
    });
  });

  it('should be able to find all Projects with pagination', async () => {
    const fakeProjectRepository = new FakeProjectRepository();
    const createProjectService = new CreateProjectsService(
      fakeProjectRepository,
    );

    // Create some Projects
    await createProjectService.execute('ProjetoTeste1', 50, {
      id: '12345',
      name: 'Teste1',
      email: 'teste1@teste.com',
    });
    await createProjectService.execute('ProjetoTeste2', 100, {
      id: '54321',
      name: 'Teste2',
      email: 'teste2@teste.com',
    });
    await createProjectService.execute('ProjetoTeste3', 200, {
      id: '51234',
      name: 'Teste3',
      email: 'teste3@teste.com',
    });

    // Search for all Projects with pagination
    const listProjectService = new ListProjectsService(fakeProjectRepository);
    const projectsPaginated = await listProjectService.execute(1, 2);

    expect(projectsPaginated).toHaveLength(2);
  });
});
