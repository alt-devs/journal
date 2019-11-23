import { Field, InputType } from "type-graphql"

@InputType()
export class UpdateCurrencyDto {
  @Field()
  name?: string
}
