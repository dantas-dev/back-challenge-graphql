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
    const user1 = await this.userService.createOne({
      name: 'Axe Smith',
      email: 'axe@challenge.com',
    });

    const user2 = await this.userService.createOne({
      name: 'Traxex Bow',
      email: 'traxex@challenge.com',
    });

    const user3 = await this.userService.createOne({
      name: 'Mirana Moonlight',
      email: 'mirana@challenge.com',
    });

    const user4 = await this.userService.createOne({
      name: 'Ekko Time',
      email: 'ekko@challenge.com',
    });

    const project1 = await this.projectService.createOne({
      name: 'Structures Project',
      price: 22.15,
    });

    const project2 = await this.projectService.createOne({
      name: 'Engineering Project',
      price: 28.15,
    });

    const project3 = await this.projectService.createOne({
      name: 'Software Project',
      price: 89.9,
    });

    const project4 = await this.projectService.createOne({
      name: 'App Project',
      price: 102.9,
    });

    const relation1 = await this.projectService.addUsersToProject(project1.id, [
      user1.id,
      user2.id,
      user3.id,
    ]);

    const relation2 = await this.projectService.addUsersToProject(project2.id, [
      user1.id,
    ]);

    const relation3 = await this.projectService.addUsersToProject(project3.id, [
      user2.id,
      user3.id,
    ]);
  }
}
