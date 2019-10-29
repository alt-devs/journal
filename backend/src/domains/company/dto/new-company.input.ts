import { MaxLength } from "class-validator"
import { Field, InputType } from "type-graphql"

@InputType()
export class NewCompanyInput {
  @MaxLength(100)
  @Field({ nullable: false }) 
  public name: string;

  @MaxLength(40)
  @Field({ nullable: false })
  public email: string;

  @MaxLength(255)
  @Field({ nullable: true })
  public photoPath?: string;

  @MaxLength(1024)
  @Field({ nullable: true })
  public description?: string;

  @Field({ nullable: true })
  public id_currency?: number;
}