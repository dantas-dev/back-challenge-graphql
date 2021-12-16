import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { NestjsQuerySequelizeModule } from '@nestjs-query/query-sequelize';
import { Module } from '@nestjs/common';
import UserProjectEntity from '../users/entities/user_project.entity';
import { CreateProjectDTO } from './dtos/createProject.dto';
import { ProjectClassDTO } from './dtos/projectClass.dto';
import { UpdateProjectDTO } from './dtos/updateProject.dto';
import { ProjectEntity } from './entities/project.entity';
import { ProjectService } from './project.service';
import { ProjectRepository } from './repositories/project.repository';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQuerySequelizeModule.forFeature([ProjectEntity])],
      resolvers: [
        {
          DTOClass: ProjectClassDTO,
          EntityClass: ProjectEntity,
          CreateDTOClass: CreateProjectDTO,
          UpdateDTOClass: UpdateProjectDTO,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.CURSOR,
        },
      ],
    }),
  ],
  providers: [ProjectRepository, ProjectService],
  exports: [ProjectService],
})
export class ProjectModule {}
