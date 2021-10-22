import { CreateProjectInput } from '../projects/dto/create-project.input';
import { Project } from '../projects/entities/project.entity';
import { CreateUserInput } from '../users/dto/create-user.input';
import { User } from '../users/entities/user.entity';
const SequelizeMock = require('sequelize-mock');
const DBConnectionMock = new SequelizeMock();
const UserMock = DBConnectionMock.define('user', {
  id: 1,
  name: 'Uigor Marshall',
  email: 'uigor@marshall.com',
});

const ProjectMock = DBConnectionMock.define('project', {
  id: 1,
  name: 'Arma X',
  email: 'k@departamento.com',
  userId: 1,
});
export class TestUtils {
  static async getAValidUser(): Promise<User> {
    const user = UserMock.create();
    return user;
  }

  static getAValidCreateUserInput(): CreateUserInput {
    const user = new CreateUserInput();
    user.name = 'Uigor Marshall';
    user.email = 'uigor@marshall.com';
    return user;
  }

  static async getAValidListUser(): Promise<User[]> {
    const userList: User[] = [];
    const user = await this.getAValidUser();
    userList.push(user);
    return userList;
  }

  static async getAValidProject(): Promise<Project> {
    return ProjectMock.create();
  }
  static async getAValidListProjects(): Promise<Project[]> {
    const projectList: Project[] = [];
    const project = await this.getAValidProject();
    projectList.push(project);
    return projectList;
  }
  static getAValidCreateProjectInput(): CreateProjectInput {
    const input = new CreateProjectInput();
    input.name = 'Project X';
    input.email = 'Corporation K';
    input.userId = 1;
    return input;
  }
}
