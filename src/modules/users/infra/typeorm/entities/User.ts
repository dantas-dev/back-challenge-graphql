// TypeORM Entities can be used as GraphQL type using the @Field decorator.

import { Column, Entity, OneToMany } from 'typeorm';

import BaseEntity from '@modules/base/infra/typeorm/entities/BaseEntity';
import Project from '@modules/projects/infra/typeorm/entities/Project';

@Entity('users')
class User extends BaseEntity {
  @Column()
  email!: string;

  @OneToMany(() => Project, project => project.user)
  projects!: Project[];
}

export default User;
