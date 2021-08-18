import { Projects } from "@modules/graphql/projects/typeorm/entities/Projects";
import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    email!: string;

    @OneToOne(() => Projects, projects => projects.user) // specify inverse side as a second parameter
    @JoinColumn()
    projects: Projects;

}