import { MaxLength } from "class-validator"
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class UserDto {
  @Field({ nullable: true }) public id?: number;

  @MaxLength(40)
  @Field({ nullable: true })
  public login?: string;

  @MaxLength(100)
  @Field({ nullable: true })
  public password?: string;

  @Field({ nullable: true })
  public lastActive?: Date;

  @Field({ nullable: true })
  public createdAt?: Date;

  @Field({ nullable: true })
  public updatedAt?: Date;
}