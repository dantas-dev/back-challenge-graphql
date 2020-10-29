import User from '@modules/users/infra/typeorm/entities/User';

export async function users() {
  const findUsers = await User.find();

  return findUsers;
}

export async function createUser(_: any, { input }: any) {
  const { name, email } = input;
  const findUser = await User.findOne({ where: { email } });

  if (findUser) throw new Error('User already exists');

  const user = User.create({ name, email });

  await User.save(user);

  return user;
}
