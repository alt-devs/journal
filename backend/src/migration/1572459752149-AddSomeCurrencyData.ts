import { getRepository, MigrationInterface, QueryRunner } from "typeorm"
import { CurrencySeed } from "../seeds/currency.seed"

export class AddSomeCurrencyData1572459752149 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await getRepository("currencies").save(CurrencySeed)
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    console.log("down")
  }
}
