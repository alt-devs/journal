import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { BaseEntity } from "../base.entity"

@Entity("currencies")
export class CurrencyEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number

  @Column({ length: 50 })
  public name: string
}
