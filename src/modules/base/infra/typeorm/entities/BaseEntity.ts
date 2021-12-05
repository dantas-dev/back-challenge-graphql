import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
abstract class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;
}

export default BaseEntity;
