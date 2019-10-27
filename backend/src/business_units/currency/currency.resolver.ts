import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { CurrencyEntity } from './currency.entity'
import { CreateCurrencyDto } from './dto/create-currency.dto'
import { CurrencyService } from './currency.service'
import { inputCurrency } from './inputs/currency.input'

@Resolver((of) => CurrencyEntity)
export class CurrencyResolver {
  constructor (private readonly currencyService: CurrencyService) {}

  @Query(() => [ CreateCurrencyDto ])
  async currency () {
    return this.currencyService.getCurrency()
  }

  @Mutation(() => CreateCurrencyDto)
  async createCurrency (@Args('data') data: inputCurrency) {
    return this.currencyService.createCurrency(data)
  }
}