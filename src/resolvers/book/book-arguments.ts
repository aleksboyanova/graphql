import { Field, InputType } from "type-graphql";
import { ObjectId } from "mongodb";

@InputType()
export class BaseBookInput {
  @Field()
  title: string;

  @Field()
  author: string;

  @Field()
  description: string;

  @Field()
  image: string;
}

@InputType()
export class BookInput extends BaseBookInput {
  @Field()
  _id: ObjectId;
}