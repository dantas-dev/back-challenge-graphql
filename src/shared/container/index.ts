import { container } from "tsyringe";

import { UsersRepositoryPG } from "../../modules/user/repositories/implementations/UserRepositoryPG";
import { IUsersRepository } from "../../modules/user/repositories/IUserRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepositoryPG",
  UsersRepositoryPG
);
