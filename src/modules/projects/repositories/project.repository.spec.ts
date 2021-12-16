import { Test, TestingModule } from '@nestjs/testing';
import { getQueryServiceToken } from '@nestjs-query/core';
import { ProjectEntity } from '../entities/project.entity';
import { ProjectRepository } from './project.repository';

describe('ProjectRepository', () => {
  let projectRepository: ProjectRepository;
  const mockProjectEntity = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProjectRepository,
        {
          provide: getQueryServiceToken(ProjectEntity),
          useValue: mockProjectEntity,
        },
      ],
    }).compile();

    projectRepository = module.get<ProjectRepository>(ProjectRepository);
  });

  it('userController should be defined', () => {
    expect(ProjectRepository).toBeDefined();
  });
});
