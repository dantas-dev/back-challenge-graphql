import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import Base from '@modules/base/infra/typeorm/entities/BaseEntity';
import User from '@modules/users/infra/typeorm/entities/User';

@Entity('projects')
class Project extends Base {
  @Column()
  userId!: string;

  @Column('float')
  price!: number;

  @ManyToOne(() => User, user => user.projects, { eager: true })
  @JoinColumn({ name: 'userId' })
  user!: User;
}

export default Project;
