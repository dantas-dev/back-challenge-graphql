import ProjectsRepository from '../infra/typeorm/repositories/ProjectsRepository';

export async function projects() {
  const projectRepository = new ProjectsRepository();

  return projectRepository.findAll();
}

export async function findByName(_: any, { projectInputByName }: any) {
  const { name, limit, page } = projectInputByName;

  const projectRepository = new ProjectsRepository();

  return projectRepository.findByName({
    name,
    limit,
    page,
  });
}

export async function findById(_: any, { id }: any) {
  const projectRepository = new ProjectsRepository();

  return projectRepository.findById(id);
}

export async function createProject(_: any, { projectInput }: any) {
  const { name, price, user_id } = projectInput;

  const projectRepository = new ProjectsRepository();

  const project = projectRepository.create({
    name,
    price,
    user_id,
  });

  return project;
}
