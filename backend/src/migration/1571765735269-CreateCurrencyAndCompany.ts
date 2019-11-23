import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
  TableIndex,
} from "typeorm"

export class CreateCurrencyAndCompany1571765735269
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "numeric",
            isPrimary: true,
          },
          {
            name: "id_employee",
            type: "numeric",
            isNullable: true,
          },
          {
            name: "id_role",
            type: "numeric",
            isNullable: true,
          },
          {
            name: "login",
            type: "varchar",
            length: "50",
          },
          {
            name: "password",
            type: "varchar",
            length: "100",
          },
          {
            name: "last_active",
            type: "timestamptz",
            isNullable: true,
          },
          {
            name: "created_at",
            type: "timestamptz",
            default: "CURRENT_TIMESTAMP",
          },
          {
            name: "updated_at",
            type: "timestamptz",
            default: "CURRENT_TIMESTAMP",
            isNullable: true,
          },
        ],
      }),
      true,
    )

    await queryRunner.createIndex(
      "users",
      new TableIndex({
        name: "idx_users_id",
        columnNames: ["id"],
        isUnique: true,
      }),
    )

    await queryRunner.query(
      "CREATE SEQUENCE users_id_seq;" +
        " ALTER TABLE users" +
        " ALTER COLUMN id SET DEFAULT NEXTVAL('users_id_seq');",
    )

    await queryRunner.query(
      "INSERT INTO users(id, login, password, created_at, updated_at)" +
        " VALUES (1, 'новый пользователь', '12345', now(), now());",
    )

    await queryRunner.createTable(
      new Table({
        name: "currencies",
        columns: [
          {
            name: "id",
            type: "numeric",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
            length: "50",
            isNullable: true,
          },
          {
            name: "created_at",
            type: "timestamptz",
            default: "CURRENT_TIMESTAMP",
          },
          {
            name: "created_by",
            type: "numeric",
          },
          {
            name: "updated_at",
            type: "timestamptz",
            default: "CURRENT_TIMESTAMP",
            isNullable: true,
          },
          {
            name: "updated_by",
            type: "numeric",
            isNullable: true,
          },
        ],
      }),
      true,
    )

    await queryRunner.createIndex(
      "currencies",
      new TableIndex({
        name: "idx_currencies_id",
        columnNames: ["id"],
        isUnique: true,
      }),
    )

    await queryRunner.query(
      "CREATE SEQUENCE currencies_id_seq;" +
        " ALTER TABLE currencies" +
        " ALTER COLUMN id SET DEFAULT NEXTVAL('currencies_id_seq');",
    )

    await queryRunner.createTable(
      new Table({
        name: "companies",
        columns: [
          {
            name: "id",
            type: "numeric",
            isPrimary: true,
          },
          {
            name: "id_currency",
            type: "numeric",
            isNullable: true,
          },
          {
            name: "name",
            type: "varchar",
            length: "100",
          },
          {
            name: "email",
            type: "varchar",
            length: "40",
            isNullable: true,
          },
          {
            name: "photo_path",
            type: "varchar",
            length: "255",
            isNullable: true,
          },
          {
            name: "description",
            type: "varchar",
            length: "1024",
            isNullable: true,
          },
          {
            name: "created_at",
            type: "timestamptz",
            default: "CURRENT_TIMESTAMP",
          },
          {
            name: "created_by",
            type: "numeric",
          },
          {
            name: "updated_at",
            type: "timestamptz",
            default: "CURRENT_TIMESTAMP",
            isNullable: true,
          },
          {
            name: "updated_by",
            type: "numeric",
            isNullable: true,
          },
        ],
      }),
      true,
    )

    await queryRunner.createIndex(
      "companies",
      new TableIndex({
        name: "idx_companies_id",
        columnNames: ["id"],
        isUnique: true,
      }),
    )

    await queryRunner.createIndex(
      "companies",
      new TableIndex({
        name: "idx_companies_id_currency",
        columnNames: ["id_currency"],
      }),
    )

    await queryRunner.createForeignKey(
      "companies",
      new TableForeignKey({
        name: "fk_comp_ref_currencies",
        columnNames: ["id_currency"],
        referencedColumnNames: ["id"],
        referencedTableName: "currencies",
        // onDelete: "CASCADE"
      }),
    )

    await queryRunner.query(
      "CREATE SEQUENCE companies_id_seq;" +
        " ALTER TABLE companies" +
        " ALTER COLUMN id SET DEFAULT NEXTVAL('companies_id_seq');",
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query("DROP SEQUENCE IF EXISTS company_id_seq CASCADE;")
    await queryRunner.dropTable("company", true, true, true)

    await queryRunner.query("DROP SEQUENCE IF EXISTS currency_id_seq CASCADE;")
    await queryRunner.dropTable("currency", true, true, true)

    await queryRunner.query("DROP SEQUENCE IF EXISTS companies_id_seq CASCADE;")
    await queryRunner.dropTable("companies", true, true, true)

    await queryRunner.query(
      "DROP SEQUENCE IF EXISTS currencies_id_seq CASCADE;",
    )
    await queryRunner.dropTable("currencies", true, true, true)

    await queryRunner.query("DROP SEQUENCE IF EXISTS users_id_seq CASCADE;")
    await queryRunner.dropTable("users", true, true, true)
  }
}
