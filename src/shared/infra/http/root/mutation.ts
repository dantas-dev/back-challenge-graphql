import { mutations as mutationsUser } from '@modules/users/graphql';
import { mutations as mutationsProject } from '@modules/projects/graphql';

export default {
  ...mutationsUser,
  ...mutationsProject,
};
