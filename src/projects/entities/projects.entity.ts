import { Field, Int, ObjectType } from "@nestjs/graphql";
import { BelongsTo, Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "src/users/entities/users.entity";

@Table({
    modelName: 'projects',
})
@ObjectType()
export class Project extends Model {
    @Field(type => Int)
    id: number;

    @Column
    @Field()
    name: string;

    @Column
    @Field()
    price: string;

    @ForeignKey(() => User)
    @Column
    userId: number;

    @BelongsTo(() => User)
    @Field((type) => User)
    user: User;
}
