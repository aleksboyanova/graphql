import { buildSchema } from "type-graphql";
import { StudentResolver } from "./resolvers/student/student-resolver";
import { LoginResolver } from "./resolvers/login/login-resolver";
import { BookResolver } from "./resolvers/book/book-resolver";
import { TypegooseMiddleware } from "./typegoose-middleware";
import { ObjectId } from "mongodb";
import { ObjectIdScalar } from "./object-id.scalar";
import { authChecker} from "./resolvers/login/login-checker"; 

import * as path from "path"

export const getSchema = async () => {
    const schema = await buildSchema({
        resolvers: [
            StudentResolver,
            LoginResolver,
            BookResolver,
        ],
        emitSchemaFile: path.resolve(__dirname, "schema.gql"),
        globalMiddlewares: [TypegooseMiddleware],
        scalarsMap: [{ type: ObjectId, scalar: ObjectIdScalar }],
        authChecker,
      });
    return schema
}