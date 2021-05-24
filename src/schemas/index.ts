import { buildSchema } from "type-graphql";

import { ProjectControllers } from "../controllers/ProjectControllers";
import { UserControllers } from "../controllers/UserControllers";
import { Project } from "../database/entities/Project";
import { User } from "../database/entities/User";

const schema = async () =>
  await buildSchema({
    resolvers: [User, Project, UserControllers, ProjectControllers],
  });

export default schema;
