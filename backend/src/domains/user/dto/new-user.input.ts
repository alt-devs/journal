import { MaxLength } from "class-validator"
import { Field, InputType } from "type-graphql"

@InputType()
export class NewUserInput {
  @MaxLength(50)
  @Field({ nullable: false })
  public login: string

  @MaxLength(100)
  @Field({ nullable: false })
  public password: string
}
