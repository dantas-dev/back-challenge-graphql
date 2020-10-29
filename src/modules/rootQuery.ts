import { queries as queriesUser } from './users/graphql';
import { queries as queriesProject } from './projects/graphql';

export default {
  ...queriesUser,
  ...queriesProject,
};
