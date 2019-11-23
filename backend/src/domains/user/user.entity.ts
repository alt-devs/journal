import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("users")
export class UserEntity {
  @PrimaryGeneratedColumn()
  public id: number

  // @OneToOne(type => EmployeeEntity)
  // @JoinColumn({ name: "id_employee" })
  // user: EmployeeEntity;

  // @OneToOne(type => RoleEntity)
  // @JoinColumn({ name: "id_role" })
  // user: RoleEntity;

  @Column({ length: 50 })
  public login: string

  @Column({ length: 100 })
  public password: string

  @Column({ name: "last_active" })
  public lastActive: Date

  @Column({ name: "created_at" })
  public createdAt: Date

  @Column({ name: "updated_at" })
  public updatedAt: Date
}
