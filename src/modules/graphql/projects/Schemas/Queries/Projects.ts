import { Projects } from "../../typeorm/entities/Projects";
import { ProjectType } from "../TypeDefs/Projects";

import { GraphQLList } from "graphql";


export const GET_ALL_PROJECTS = {
    type: new GraphQLList(ProjectType),

    resolve() {
        return Projects.find();
    }
}