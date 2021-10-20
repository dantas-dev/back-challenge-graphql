import { Test, TestingModule } from '@nestjs/testing';
import { ProjectsService } from './projects.service';

describe('ProjectsService', () => {
  let service: ProjectsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectsService],
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
  });
});
