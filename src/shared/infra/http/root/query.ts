import { queries as queriesUser } from '@modules/users/graphql';
import { queries as queriesProject } from '@modules/projects/graphql';

export default {
  ...queriesUser,
  ...queriesProject,
};
