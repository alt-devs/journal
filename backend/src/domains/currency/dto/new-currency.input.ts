import { MaxLength } from "class-validator"
import { Field, InputType } from "type-graphql"

@InputType()
export class NewCurrencyInput {
  @MaxLength(50)
  @Field()
  readonly name?: string
}
