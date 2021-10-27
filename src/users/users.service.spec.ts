import { Test, TestingModule } from '@nestjs/testing';
import { UsersRepository } from './repositories/users.repository';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;
  const mockUsersRepository = {
    create: jest.fn(),
    findAll: jest.fn(),
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: UsersRepository,
          useValue: mockUsersRepository,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('Deve ser definido', () => {
    expect(service).toBeDefined();
  });

  describe('Create', () => {
    it('Deve ser definido', () => {
      expect(service.create).toBeDefined();
    });
  });

  describe('FindAll', () => {
    it('Deve ser definido', () => {
      expect(service.findAll).toBeDefined();
    });
  });

  describe('FindOneById', () => {
    it('Deve ser definido', () => {
      expect(service.findOneById).toBeDefined();
    });
  });
});
