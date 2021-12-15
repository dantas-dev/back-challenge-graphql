import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ScheduleModule } from '@nestjs/schedule';
import { AppConfigModule } from './modules/appConfig/appConfig.module';
import { AppConfigService } from './modules/appConfig/appConfig.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './modules/users/user.module';

@Module({
  imports: [
    AppConfigModule,
    ScheduleModule.forRoot(),
    SequelizeModule.forRootAsync({
      imports: [AppConfigModule],
      useFactory: (configService: AppConfigService) => ({
        dialect: configService.type,
        database: configService.name,
        autoLoadModels: configService.autoloadEntities,
        synchronize: configService.syncronyze,
      }),
      inject: [AppConfigService],
    }),
    GraphQLModule.forRootAsync({
      imports: [AppConfigModule],
      useFactory: (configService: AppConfigService) => ({
        debug: configService.debug,
        playground: configService.graphqlPlayground,
        autoSchemaFile: true,
      }),
      inject: [AppConfigService],
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
