import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity("currency")
export class CurrencyEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ length: 50 })
  public name: string;
}
