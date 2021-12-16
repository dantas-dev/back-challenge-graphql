import { Injectable } from '@nestjs/common';
import { Timeout } from '@nestjs/schedule';
import { ProjectService } from './modules/projects/project.service';
import { UserService } from './modules/users/user.service';

@Injectable()
export class AppService {
  constructor(
    private userService: UserService,
    private projectService: ProjectService,
  ) {}

  @Timeout(100)
  async initDatabaseData() {
    await this.userService.createOne({
      name: 'Rafael',
      email: 'rafaael.figueiredo@gmail.com',
    });

    await this.userService.createOne({
      name: 'Rafael2',
      email: 'rafaael2.figueiredo@gmail.com',
    });

    await this.projectService.createOne({
      name: 'project1',
      price: 25.15,
    });

    await this.projectService.createOne({
      name: 'project2',
      price: 25.15,
    });
  }
}
