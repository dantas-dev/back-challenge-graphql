import { Test, TestingModule } from '@nestjs/testing';
import { ProjectsResolver } from './projects.resolver';
import { ProjectsService } from './projects.service';

describe('ProjectsResolver', () => {
  let resolver: ProjectsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectsResolver, ProjectsService],
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
  });
});
