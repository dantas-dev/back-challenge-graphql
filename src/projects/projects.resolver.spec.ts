import { Test, TestingModule } from '@nestjs/testing';
import { TestUtils } from '../utils/test.utils';
import { ProjectsResolver } from './projects.resolver';
import { ProjectsService } from './projects.service';
import { ProjectsRepository } from './repositories/projects.repository';

describe('ProjectsResolver', () => {
  let resolver: ProjectsResolver;
  const mockRepository = {
    create: jest.fn(),
    findAll: jest.fn(),
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProjectsResolver,
        ProjectsService,
        {
          provide: ProjectsRepository,
          useValue: mockRepository,
        },
      ],
    }).compile();

    resolver = module.get<ProjectsResolver>(ProjectsResolver);
  });

  it('Deve ser Definido', () => {
    expect(resolver).toBeDefined();
  });

  describe('FindAll', () => {
    it('Deve ser Definido', () => {
      expect(resolver.findAll).toBeDefined();
    });
  });

  describe('Create', () => {
    it('Deve ser Definido', () => {
      expect(resolver.create).toBeDefined();
    });

    it('Deve criar um projeto e retornar o objeto criado mais o User vinculado', async () => {
      const project = await TestUtils.getAValidProject();
      const input = TestUtils.getAValidCreateProjectInput();
      mockRepository.create.mockReturnValue(project);
      const result = await resolver.create(input);
      expect(result).toBe(project);
    });
  });
});
