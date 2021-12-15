import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ScheduleModule } from '@nestjs/schedule';
import { AppConfigModule } from './modules/appConfig/appConfig.module';
import { AppConfigService } from './modules/appConfig/appConfig.service';
import { SequelizeModule } from '@nestjs/sequelize';

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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
