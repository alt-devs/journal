import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { CurrencyService } from "./currency.service"
import { CurrencyEntity } from "./currency.entity"
import { CurrencyResolver } from "./currency.resolver"

@Module({
  imports: [TypeOrmModule.forFeature([CurrencyEntity])],
  providers: [CurrencyResolver, CurrencyService],
  exports: [],
})
export class CurrencyModule {}
