import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Dialect } from 'sequelize/dist';

@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {}

  get type() {
    return this.configService.get<Dialect>('database.type');
  }

  get port() {
    return this.configService.get<number>('database.port');
  }
  get name() {
    return this.configService.get<string>('database.name');
  }
  get autoloadEntities() {
    return this.configService.get<boolean>('database.autoloadEntities');
  }
  get syncronyze() {
    return this.configService.get<boolean>('database.syncronyze');
  }

  get debug() {
    return this.configService.get<boolean>('graphql.debug');
  }

  get graphqlPlayground() {
    return this.configService.get<boolean>('graphql.playground');
  }

  get graphqlAutoSchemaFile() {
    return this.configService.get<string>('graphql.autoSchemaFile');
  }

  get graphqlSortSchema() {
    return this.configService.get<boolean>('graphql.sortSchema');
  }
}
