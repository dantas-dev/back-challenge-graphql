import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, HasMany, Model, Table } from "sequelize-typescript";
import { Project } from "src/projects/entities/projects.entity";

@Table({
    modelName: 'users',
})
@ObjectType()
export class User extends Model{
    @Field(type => Int)
    id: number;

    @Column
    @Field()
    name: string;

    @Column
    @Field()
    email: string;

    @HasMany(() => Project)
    @Field(() => [Project])
    projects: Project[] = [];
  }
