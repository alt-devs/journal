import { Field, ObjectType } from "type-graphql"

@ObjectType()
export class CreateCurrencyDto {
  @Field() readonly id?: number
  @Field() name?: string
}
