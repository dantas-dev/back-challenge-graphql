import { container } from "tsyringe";

import { ProjectRepositoryPG } from "../../modules/projects/repositories/implementations/ProjectRespositoryPG";
import { IProjectRepository } from "../../modules/projects/repositories/IProjectRepository";
import { UsersRepositoryPG } from "../../modules/user/repositories/implementations/UserRepositoryPG";
import { IUsersRepository } from "../../modules/user/repositories/IUserRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepositoryPG",
  UsersRepositoryPG
);

container.registerSingleton<IProjectRepository>(
  "ProjectRepositoryPG",
  ProjectRepositoryPG
);
