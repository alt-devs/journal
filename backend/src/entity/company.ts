import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import Currency from './Currency';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  public id: number;

  @OneToOne(type => Currency)
  @JoinColumn({ name: 'id_currency' })
  currency: Currency;

  @Column({ length: 100 })
  public name: string;

  @Column({ length: 40 })
  public email: string;

  @Column({ length: 255, name: 'photo_path' })
  public photoPath: string;

  @Column({ length: 1024 })
  public description: string;
}

export default Company;
