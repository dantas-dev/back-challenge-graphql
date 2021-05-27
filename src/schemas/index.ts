import { buildSchema } from "type-graphql";

import { ProjectControllers } from "../controllers/ProjectControllers";
import { UserControllers } from "../controllers/UserControllers";

const schema = async () =>
  await buildSchema({
    resolvers: [UserControllers, ProjectControllers],
  });

export default schema;
