import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './modules/users/user.service';
import { ProjectService } from './modules/projects/project.service';
import { AppService } from './app.service';
import { UserEntity } from './modules/users/entities/user.entity';
import { ProjectEntity } from './modules/projects/entities/project.entity';

describe('AppService', () => {
  let appService: AppService;
  let mockUserService: Partial<UserService> = {};
  let mockProjectService: Partial<ProjectService> = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: UserService,
          useValue: mockUserService,
        },
        {
          provide: ProjectService,
          useValue: mockProjectService,
        },

        AppService,
      ],
    }).compile();

    appService = module.get<AppService>(AppService);
  });

  it('appService should be defined', () => {
    expect(appService).toBeDefined();
  });

  describe('AppService', async () => {
    it('initDatabaseData should return false', async () => {
      mockUserService.findAll = () =>
        Promise.resolve([
          {
            name: 'Test',
            email: 'test@test.com',
            id: '123i90132i90132=-0213i09123',
            createdAt: new Date(),
            updatedAt: new Date(),
            deletedAt: new Date(),
          },
          {
            name: 'Test',
            email: 'test@test.com',
            id: '123i90132i90132=-0213i09123',
            createdAt: new Date(),
            updatedAt: new Date(),
            deletedAt: new Date(),
          },
        ] as UserEntity[]);

      expect(await appService.initDatabaseData()).toBe(false);
    });

    it('initDatabaseData should return true', async () => {
      mockUserService.findAll = () => Promise.resolve([] as UserEntity[]);
      mockUserService.createOne = () =>
        Promise.resolve('something' as any as UserEntity);
      mockProjectService.createOne = () =>
        Promise.resolve('something' as any as ProjectEntity);
      mockProjectService.addUsersToProject = () =>
        Promise.resolve('something' as any as ProjectEntity);

      expect(await appService.initDatabaseData()).toBe(true);
    });
  });
});
