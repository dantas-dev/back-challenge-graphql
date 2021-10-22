import { Test, TestingModule } from '@nestjs/testing';
import { TestUtils } from '../utils/test.utils';
import { ProjectsService } from './projects.service';
import { ProjectsRepository } from './repositories/projects.repository';

describe('ProjectsService', () => {
  let service: ProjectsService;
  const mockUsersRepository = {
    create: jest.fn(),
    findAll: jest.fn(),
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProjectsService,
        {
          provide: ProjectsRepository,
          useValue: mockUsersRepository,
        },
      ],
    }).compile();

    service = module.get<ProjectsService>(ProjectsService);
  });

  it('Deve ser definido', () => {
    expect(service).toBeDefined();
  });

  describe('FindAll', () => {
    it('Deve ser definido', () => {
      expect(service.findAll).toBeDefined();
    });

    it('Deve retornar uma lista de Projects válidos', async () => {
      const projects = await TestUtils.getAValidListProjects();

      mockUsersRepository.findAll.mockReturnValue(projects);
      const result = await service.findAll();
      expect(result).toEqual(projects);
    });
  });


  describe('Create', () => {
    it('Deve ser definido', () => {
      expect(service.create).toBeDefined();
    });
  });
});
