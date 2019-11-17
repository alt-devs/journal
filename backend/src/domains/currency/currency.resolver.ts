import { Resolver, Query, Mutation, Args } from "@nestjs/graphql"
import { ParseIntPipe } from "@nestjs/common"

import { CurrencyEntity } from "./currency.entity"
import { CurrencyService } from "./currency.service"
import { CreateCurrencyDto } from "./dto/create-currency.dto"
import { UpdateCurrencyDto } from "./dto/update-currency.dto"
import { NewCurrencyInput } from "./dto/new-currency.input"

@Resolver(of => CurrencyEntity)
export class CurrencyResolver {
  constructor(private readonly currencyService: CurrencyService) {}

  @Query(() => [CreateCurrencyDto])
  async currencies() {
    return this.currencyService.getCurrencies()
  }

  @Mutation(() => CreateCurrencyDto)
  async createCurrency(@Args("data") data: NewCurrencyInput) {
    return this.currencyService.createCurrency(data)
  }

  @Mutation(() => CreateCurrencyDto)
  async updateCurrency(
    @Args("id", ParseIntPipe) id: number,
    @Args("data") data: UpdateCurrencyDto,
  ) {
    return this.currencyService.updateCurrency(id, data)
  }

  @Mutation(returns => Boolean)
  async removeCurrency(@Args("id", ParseIntPipe) id: number) {
    return this.currencyService.removeCurrency(id)
  }
}
