import { container } from 'tsyringe';

import IUserDTO from '@modules/users/dto/IUserDTO';

import ListProjectsService from '@modules/projects/services/ListProjectsService';
import CreateProjectsService from '@modules/projects/services/CreateProjectsService';
import FindProjectByIdService from '@modules/projects/services/FindProjectByIdService';

import CreateUsersService from '@modules/users/services/CreateUsersService';
import ListUsersService from '@modules/users/services/ListUsersService';
import FindUserByIdService from '@modules/users/services/FindUserByIdService';

const resolvers = {
  Query: {
    users: (
      _: any,
      { page, perPage, name }: { page: number; perPage: number; name: string },
    ) => container.resolve(ListUsersService).execute(page, perPage, name),

    user: (_: any, { id }: { id: string }) =>
      container.resolve(FindUserByIdService).execute(id),

    projects: (
      _: any,
      { page, perPage, name }: { page: number; perPage: number; name: string },
    ) => container.resolve(ListProjectsService).execute(page, perPage, name),

    project: (_: any, { id }: { id: string }) =>
      container.resolve(FindProjectByIdService).execute(id),
  },

  Mutation: {
    createUser: (_: any, { name, email }: { name: string; email: string }) =>
      container.resolve(CreateUsersService).execute(name, email),

    createProject: async (
      _: any,
      { name, price, user }: { name: string; price: number; user: IUserDTO },
    ) => {
      const createdUser = await container
        .resolve(CreateUsersService)
        .execute(user.name, user.email);

      return container
        .resolve(CreateProjectsService)
        .execute(name, price, createdUser);
    },
  },
};

export default resolvers;
