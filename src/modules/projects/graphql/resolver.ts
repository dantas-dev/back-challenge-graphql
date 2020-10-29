import User from '@modules/users/infra/typeorm/entities/User';
import Project from '../infra/typeorm/entities/Project';

export async function projects() {
  const findProjects = await Project.find();

  return findProjects;
}

export async function createProject(_: any, { input }: any) {
  const { name, price, user_id } = input;

  const existProject = await Project.findOne({ where: { name } });
  const user = await User.findOne(user_id);

  if (existProject || !user) {
    throw new Error('Project already exists or user not found.');
  }

  const project = Project.create({ name, price, user });

  await project.save();

  return project;
}
