import { Module } from '@nestjs/common';
import { User } from './users/entities/user.entity';
import { GraphQLModule } from '@nestjs/graphql/dist/graphql.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { ProjectsModule } from './projects/projects.module';
require('dotenv/config');
@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      models: [User],
      autoLoadModels: true,
      synchronize: true,
    }),
    UsersModule,
    ProjectsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
