import { Test, TestingModule } from '@nestjs/testing';
import { getQueryServiceToken } from '@nestjs-query/core';
import { UserRepository } from './user.repository';
import { UserEntity } from '../entities/user.entity';

describe('UsersService', () => {
  let userRepository: UserRepository;
  const mockedSubTaskService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserRepository,
        {
          provide: getQueryServiceToken(UserEntity),
          useValue: mockedSubTaskService,
        },
      ],
    }).compile();

    userRepository = module.get<UserRepository>(UserRepository);
  });

  it('userController should be defined', () => {
    expect(userRepository).toBeDefined();
  });
});
