import { ConflictException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ProjectService } from './project.service';
import { ProjectRepository } from './repositories/project.repository';

describe('UsersService', () => {
  let projectService: ProjectService;
  let mockUsersRepository: Partial<ProjectRepository> = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: ProjectRepository,
          useValue: mockUsersRepository,
        },
        ProjectService,
      ],
    }).compile();

    projectService = module.get<ProjectService>(ProjectService);
  });

  it('projectService should be defined', () => {
    expect(projectService).toBeDefined();
  });
});
