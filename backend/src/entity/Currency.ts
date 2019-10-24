import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Currency {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ length: 50 })
  public name: string;
}

export default Currency;
