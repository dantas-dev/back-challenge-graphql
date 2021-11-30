import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsResolver } from './projects.resolver';

@Module({
  providers: [ProjectsResolver, ProjectsService]
})
export class ProjectsModule {}
