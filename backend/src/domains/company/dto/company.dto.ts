import { MaxLength } from "class-validator"
import { Field, ObjectType } from "type-graphql"

@ObjectType()
export class CompanyDto {
  @Field({ nullable: true }) public id?: number

  @MaxLength(100)
  @Field({ nullable: true })
  public name?: string

  @MaxLength(40)
  @Field({ nullable: true })
  public email?: string

  @MaxLength(255)
  @Field({ nullable: true })
  public photoPath?: string

  @MaxLength(1024)
  @Field({ nullable: true })
  public description?: string

  @Field({ nullable: true })
  public id_currency?: number
}
