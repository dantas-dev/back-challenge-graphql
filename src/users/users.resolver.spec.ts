import { Test, TestingModule } from '@nestjs/testing';
import { TestUtils } from '../utils/test.utils';
import { UsersResolver } from './users.resolver';

describe('UsersResolver', () => {
  let resolver: UsersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersResolver],
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
      expect(resolver.create()).toEqual(TestUtils.getAValidUser());
    });
  });
});
