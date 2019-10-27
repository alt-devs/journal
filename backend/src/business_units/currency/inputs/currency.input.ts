import { Field, InputType } from "type-graphql"

@InputType()
export class inputCurrency {
  @Field() readonly name?: string;
}