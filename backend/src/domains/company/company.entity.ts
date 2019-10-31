import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CurrencyEntity } from '../currency/currency.entity';
import {BaseEntity} from "../base.entity";

@Entity("companies")
export class CompanyEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @OneToOne(type => CurrencyEntity)
  @JoinColumn({ name: 'id_currency' })
  currency: CurrencyEntity;

  @Column({ length: 100 })
  public name: string;

  @Column({ length: 40 })
  public email: string;

  @Column({ length: 255, name: 'photo_path' })
  public photoPath: string;

  @Column({ length: 1024 })
  public description: string;
}
