import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";

import { User } from "../../user/entities/User";

@Entity("projects")
class Project {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @ManyToOne(() => User)
  user: User;
}

export { Project };
