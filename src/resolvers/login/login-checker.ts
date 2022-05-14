import { AuthChecker } from "type-graphql";
import { Context } from "./context";

export const authChecker: AuthChecker<Context> = (
    { context: {student} },
    roles,
  ) => {
    if(!student) {
        return false;
    }
    return student.roles.some(role => roles.includes(role))

};