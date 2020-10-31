import faker from 'faker';
import factory from 'factory-girl';

import User from '../src/modules/users/infra/typeorm/entities/User';
import Project from '../src/modules/projects/infra/typeorm/entities/Project';

factory.define('User', User, {
  name: faker.name.findName(),
  email: faker.internet.email(),
});

factory.define('Project', Project, {
  name: faker.name.title(),
  price: faker.random.float(),
  user_id: 1,
});

export default factory;
