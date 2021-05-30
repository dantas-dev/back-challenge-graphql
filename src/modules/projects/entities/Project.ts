import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

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

  @Column()
  deadline: Date;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Project };
