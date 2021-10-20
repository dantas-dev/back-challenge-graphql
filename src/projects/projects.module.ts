import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsResolver } from './projects.resolver';
import { Project } from './entities/project.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProjectsRepository } from './repositories/projects.repository';

@Module({
  imports: [SequelizeModule.forFeature([Project])],
  providers: [ProjectsResolver, ProjectsService, ProjectsRepository],
})
export class ProjectsModule {}
