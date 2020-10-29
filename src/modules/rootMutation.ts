import { mutations as mutationsUser } from './users/graphql';
import { mutations as mutationsProject } from './projects/graphql';

export default {
  ...mutationsUser,
  ...mutationsProject,
};
