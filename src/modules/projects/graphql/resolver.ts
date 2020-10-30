import ProjectsRepository from '../infra/typeorm/repositories/ProjectsRepository';

export async function projects() {
  const projectRepository = new ProjectsRepository();
  return projectRepository.findAll();
}

export async function createProject(_: any, { input }: any) {
  const { name, price, user_id } = input;

  const projectRepository = new ProjectsRepository();

  const project = projectRepository.create({
    name,
    price,
    user_id,
  });

  return project;
}
