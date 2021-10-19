import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
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
});
