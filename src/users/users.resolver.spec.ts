import { Test, TestingModule } from '@nestjs/testing';
import { TestUtils } from '../utils/test.utils';
import { UsersRepository } from './repositories/users.repository';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

describe('UsersResolver', () => {
  let resolver: UsersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersResolver,
        UsersService,
        {
          provide: UsersRepository,
          useValue: {},
        },
      ],
    }).compile();

    resolver = module.get<UsersResolver>(UsersResolver);
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

      expect(resolver.create(input)).toEqual(result);
    });
  });
});
