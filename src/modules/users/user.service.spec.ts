import { ConflictException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { CreateUserDTO } from './dtos/createUser.input';
import { UserEntity } from './entities/user.entity';
import { UserRepository } from './repositories/user.repository';
import { UserService } from './user.service';

describe('UsersService', () => {
  let userService: UserService;
  let mockUsersRepository: Partial<UserRepository>;

  beforeEach(async () => {
    mockUsersRepository = {
      createOne: (createUserInput: CreateUserDTO) => {
        const user: UserEntity = {
          name: 'Test',
          email: 'test@test.com',
          id: '123i90132i90132=-0213i09123',
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: new Date(),
        } as UserEntity;
        return Promise.resolve(user);
      },
    };

    const FakeUsersRepository = {
      provide: UserRepository,
      useValue: mockUsersRepository,
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [FakeUsersRepository, UserService],
    }).compile();

    userService = module.get<UserService>(UserService);
  });

  describe('createOne', () => {
    it('findAll method should be defined', () => {
      expect(userService.createOne).toBeDefined();
    });

    it('should return an user', async () => {
      const userCreated = await userService.createOne({
        email: 'something@test.com',
        name: 'Testing',
      });
      expect(userCreated.name).toEqual('Test');
    });

    it('should throw an ConflictException', async () => {
      mockUsersRepository.createOne = () => Promise.resolve(null as UserEntity);
      await expect(
        userService.createOne({
          email: 'something@test.com',
          name: 'Testing',
        }),
      ).rejects.toThrowError(ConflictException);
    });
  });

  it('userService should be defined', () => {
    expect(userService).toBeDefined();
  });

  it('findAll method should be defined', () => {
    expect(userService.findAll).toBeDefined();
  });
});
