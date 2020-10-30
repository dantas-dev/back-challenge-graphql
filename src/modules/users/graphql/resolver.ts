import UsersRepository from '../infra/typeorm/repositories/UsersRepository';

export async function users() {
  const userRepository = new UsersRepository();

  return userRepository.findAll();
}

export async function createUser(_: any, { input }: any) {
  const { name, email } = input;

  const userRepository = new UsersRepository();

  const user = await userRepository.create({
    name,
    email,
  });

  return user;
}
