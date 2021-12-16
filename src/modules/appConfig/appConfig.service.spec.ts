import { Test, TestingModule } from '@nestjs/testing';
import { getQueryServiceToken } from '@nestjs-query/core';
import { ConfigService } from '@nestjs/config';
import { AppConfigService } from './appConfig.service';

describe('AppConfigService', () => {
  let appConfigService: AppConfigService;
  let mockConfigService: Partial<ConfigService> = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: ConfigService,
          useValue: mockConfigService,
        },
        AppConfigService,
      ],
    }).compile();

    appConfigService = module.get<AppConfigService>(AppConfigService);
  });

  it('userController should be defined', () => {
    expect(appConfigService).toBeDefined();
  });
});
