import { Field, ObjectType } from "type-graphql"

@ObjectType()
export class CreateUserDto {
  @Field() readonly id?: number
  @Field() login: string
  @Field() password: string
  @Field() lastActive?: Date
  @Field() createdAt?: Date
  @Field() updatedAt?: Date
}
