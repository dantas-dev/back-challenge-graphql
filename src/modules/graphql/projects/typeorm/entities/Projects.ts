import { BaseEntity, Column, Entity, JoinColumn, JoinTable, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from '../../../../graphql/users/typeorm/entities/Users';

@Entity()
export class Projects extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    price!: string;

    @Column(
        { nullable: true }
    )
    id_user: number;

    @OneToOne(() => Users, { eager: true })
    @JoinColumn({ name: "id_user" })
    user!: Users;
}