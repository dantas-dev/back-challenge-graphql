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

    it('Deve retornar um novo User válido', () => {
      const input = TestUtils.getAValidCreateUserInput();
      const result = TestUtils.getAValidUser();
      
      mockUsersRepository.create.mockReturnValue(result);

      expect(resolver.create(input)).toEqual(result);
    });
  });
});
