import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { GraphQLModule } from "@nestjs/graphql"

import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { CompanyModule } from "./domains/company/company.module"
import { CurrencyModule } from "./domains/currency/currency.module"
import { UserModule } from "./domains/user/user.module"

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    GraphQLModule.forRoot({
      autoSchemaFile: "schema.gql",
    }),
    CompanyModule,
    CurrencyModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
