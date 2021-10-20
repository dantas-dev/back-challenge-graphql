import { CreateUserInput } from '../users/dto/create-user.input';
import { User } from '../users/entities/user.entity';

export class TestUtils {
  static async getAValidUser(): Promise<User> {
    return await User.create({
      id: 1,
      name: 'Uigor Marshall',
      email: 'uigor@marshall.com',
    });
  }

  static getAValidCreateUserInput(): CreateUserInput {
    const user = new CreateUserInput();
    user.name = 'Uigor Marshall';
    user.email = 'uigor@marshall.com';
    return user;
  }
}
