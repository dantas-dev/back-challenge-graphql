import { Test, TestingModule } from '@nestjs/testing';
import { getQueryServiceToken } from '@nestjs-query/core';
import { UserEntity } from './entities/user.entity';
import { UserRepository } from './repositories/user.repository';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UsersService', () => {
  let userController: UserController;
  let mockUserService: Partial<UserService> = {};
  let mockUserRepository: Partial<UserRepository> = {};

  const mockedSubTaskService = {};

  beforeEach(async () => {
    const MockUserRepository = {
      provide: UserRepository,
      useValue: mockUserRepository,
    };

    const MockUserService = {
      provide: UserService,
      useValue: mockUserService,
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        MockUserRepository,
        MockUserService,
        {
          provide: getQueryServiceToken(UserEntity),
          useValue: mockedSubTaskService,
        },
      ],
    }).compile();

    userController = module.get<UserController>(UserController);
  });

  it('userController should be defined', () => {
    expect(userController).toBeDefined();
  });
});
