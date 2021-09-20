import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getUsers = async () => {
  const result = await prisma.user.findMany({
    include: { projects: { include: { project: true } } },
  });

  return result;
};

export const createUser = async () => {
  const user = await prisma.user.create({
    user: {
      id: 100,
      name: "teste100",
      email: "teste100@teste100.com",
    },
  });
  return user;
};

export const getProjects = async () => {
  const result = await prisma.project.findMany();

  return result;
};

export const createProject = async () => {
  const project = await prisma.project.create({
    project: {
      id: 100,
      title: "teste100",
      price: "1000",
      user: {
        id: 100,
        name: "teste100",
        email: "teste100@teste100.com",
      }
    },
  });
  return project;
};