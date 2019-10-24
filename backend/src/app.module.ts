import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyModule } from './business_units/company/company.module';
import { CurrencyModule } from './business_units/currency/currency.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    CompanyModule, CurrencyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
