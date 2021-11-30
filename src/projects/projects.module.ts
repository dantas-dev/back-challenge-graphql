import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Project } from './entities/projects.entity';
import { ProjectsResolver } from './projects.resolver';
import { ProjectsService } from './projects.service';
import { ProjectsRepository } from './repositories/projects.repository';

@Module({
  imports: [SequelizeModule.forFeature([Project])],
  exports: [SequelizeModule],
  providers: [ProjectsResolver, ProjectsService, ProjectsRepository]
})
export class ProjectsModule {}
