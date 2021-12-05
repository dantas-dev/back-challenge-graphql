import 'reflect-metadata';

import FakeProjectRepository from '../FakeRepositories/FakeProjectRepository';
import CreateProjectsService from '../../services/CreateProjectsService';
import FindProjectByIdService from '../../services/FindProjectByIdService';

describe('FindProjectById', () => {
  it('should be able to find an Project by id', async () => {
    const fakeProjectRepository = new FakeProjectRepository();

    // Create Project on Fake Repository
    const createProjectService = new CreateProjectsService(
      fakeProjectRepository,
    );
    const newProject = await createProjectService.execute('Projeto Teste', 50, {
      id: '12345',
      name: 'Teste',
      email: 'teste@teste.com',
    });

    // Search for the created Project by ID
    const findProjectService = new FindProjectByIdService(
      fakeProjectRepository,
    );
    const foundProject = findProjectService.execute(newProject.id!);

    expect(foundProject).toBeDefined();
  });
});
