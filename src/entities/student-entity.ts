import { ObjectType, Field, Authorized } from "type-graphql";
import { prop as Prop, getModelForClass, modelOptions, Severity } from "@typegoose/typegoose"
import { ObjectId } from "mongodb"
import { Book } from "./book-entity";
import { StudentRoles } from "../resolvers/student/student-roles";

@modelOptions({ options: { allowMixed: Severity.ALLOW } })

@ObjectType()
export class Student {

  @Field()
  readonly _id: ObjectId;

  @Prop({required: true})
  @Field()
  firstName: string;

  @Prop({required: true})
  @Field()
  lastName: string;

  @Prop({required: true})
  @Field()
  email: string;

  @Prop({required: false})
  @Field()
  password: string;

  @Field()
  @Prop({default: Date.now()})
  lastLogin?: number;

  @Field(type => [Book])
  @Prop({default: []})
  books?: Book[]

  @Authorized([StudentRoles.MASTER])
  @Field(type => [String])
  @Prop({default: [StudentRoles.STUDENT]})
  roles?: string[]

}

export const StudentModel = getModelForClass(Student, { schemaOptions: { timestamps: true }})