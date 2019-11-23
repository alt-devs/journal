import { Resolver, Query, Mutation, Args } from "@nestjs/graphql"
import { ParseIntPipe } from "@nestjs/common"

import { UserEntity } from "./user.entity"
import { UserService } from "./user.service"
import { CreateUserDto } from "./dto/create-user.dto"
import { UpdateUserDto } from "./dto/update-user.dto"
import { NewUserInput } from "./dto/new-user.input"
import { UserDto } from "./dto/user.dto"

@Resolver(of => UserEntity)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [UserDto])
  async users() {
    return this.userService.getUsers()
  }

  @Mutation(() => UserDto)
  async createUser(@Args("data") data: NewUserInput) {
    return this.userService.createUser(data)
  }

  @Mutation(() => UserDto)
  async updateUser(
    @Args("id", ParseIntPipe) id: number,
    @Args("data") data: UpdateUserDto,
  ) {
    return this.userService.updateUser(id, data)
  }

  @Mutation(returns => Boolean)
  async removeUser(@Args("id", ParseIntPipe) id: number) {
    return this.userService.removeUser(id)
  }
}
