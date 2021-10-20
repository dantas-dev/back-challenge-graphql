import { Test, TestingModule } from '@nestjs/testing';
import { TestUtils } from '../utils/test.utils';
import { UsersRepository } from './repositories/users.repository';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

describe('UsersResolver', () => {
  let resolver: UsersResolver;
  let usersService: UsersService;
  const mockUsersRepository = {
    create: jest.fn(),
    findAll: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersResolver,
        UsersService,
        {
          provide: UsersRepository,
          useValue: mockUsersRepository,
        },
      ],
    }).compile();

    resolver = module.get<UsersResolver>(UsersResolver);
    usersService = module.get<UsersService>(UsersService);
  });

  it('Deve ser definido', () => {
    expect(resolver).toBeDefined();
  });

  describe('Create', () => {
    it('Deve ser definido', () => {
      expect(resolver.create).toBeDefined();
    });

    it('Deve retornar um novo User válido', async () => {
      const input = TestUtils.getAValidCreateUserInput();
      const user = await TestUtils.getAValidUser();

      mockUsersRepository.create.mockReturnValue(user);
      const result = resolver.create(input);
      expect(result).toEqual(user);
    });
  });

  describe('FindAll', () => {
    it('Deve ser definido', () => {
      expect(resolver.findAll).toBeDefined();
    });

    it('Deve retornar uma lista de Users válidos', async () => {
      const users = await TestUtils.getAValidListUser();

      mockUsersRepository.findAll.mockReturnValue(users);
      const result = resolver.findAll();

      expect(result).toEqual(users);
    });
  });
});
