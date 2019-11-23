import {
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
} from "typeorm"

export abstract class BaseEntity {
  // @PrimaryGeneratedColumn()
  // @Column({ type: 'numeric' })
  // public id: number;

  @CreateDateColumn({
    name: "created_at",
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date

  @Column({ name: "created_by", type: "numeric" })
  createdBy: number

  @UpdateDateColumn({
    name: "updated_at",
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
  })
  updatedAt: Date

  @Column({ name: "updated_by", type: "numeric" })
  updatedBy: number

  // @Column({ type: 'boolean', default: true })
  // isActive: boolean;

  // @Column({ type: 'boolean', default: false })
  // isArchived: boolean;
}
