import { MigrationInterface, QueryRunner, Table, TableForeignKey, TableIndex } from 'typeorm';

export class CreateCurrencyAndCompany1571765735269 implements MigrationInterface {

    // private upQuery: string = 'CREATE TABLE currency (' +
    //                               ' id NUMERIC NOT NULL,' +
    //                               ' name VARCHAR(50) NULL,' +
    //                               ' constraint PK_CURRENCY primary key (id)' +
    //                           ');' +
    //                           ' CREATE UNIQUE INDEX idx_currency_id ON currency USING BTREE (id);' +
    //                           ' CREATE SEQUENCE currency_id_seq;' +
    //                           ' ALTER TABLE currency' +
    //                             ' ALTER COLUMN id SET DEFAULT NEXTVAL(\'currency_id_seq\');';
    //
    // private downQuery: string = 'DROP SEQUENCE IF EXISTS currency_id_seq CASCADE;' +
    //                             'DROP INDEX IF EXISTS idx_currency_id;' +
    //                             'DROP TABLE IF EXISTS currency;';

    public async up(queryRunner: QueryRunner): Promise<any> {
//      await queryRunner.query(this.upQuery);

      await queryRunner.createTable(new Table({
        name: 'currency',
        columns: [
          {
            name: 'id',
            type: 'numeric',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
            length: '50',
            isNullable: true,
          },
        ],
      }), true);

      await queryRunner.createIndex('currency', new TableIndex({
        name: 'idx_currency_id',
        columnNames: ['id'],
        isUnique: true,
      }));

      await queryRunner.query(' CREATE SEQUENCE currency_id_seq;' +
                                     ' ALTER TABLE currency' +
                                        ' ALTER COLUMN id SET DEFAULT NEXTVAL(\'currency_id_seq\');');

      await queryRunner.createTable(new Table({
        name: 'company',
        columns: [
          {
            name: 'id',
            type: 'numeric',
            isPrimary: true,
            // generationStrategy: 'increment',
            // isGenerated: true,
          },
          {
            name: 'id_currency',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'name',
            type: 'varchar',
            length: '100',
          },
          {
            name: 'email',
            type: 'varchar',
            length: '40',
            isNullable: true,
          },
          {
            name: 'photo_path',
            type: 'varchar',
            length: '255',
            isNullable: true,
          },
          {
            name: 'description',
            type: 'varchar',
            length: '1024',
            isNullable: true,
          },
        ],
      }), true);

      await queryRunner.createIndex('company', new TableIndex({
        name: 'idx_company_id',
        columnNames: ['id'],
        isUnique: true,
      }));

      await queryRunner.createIndex('company', new TableIndex({
        name: 'idx_company_id_currency',
        columnNames: ['id_currency'],
      }));

      await queryRunner.createForeignKey('company', new TableForeignKey({
        name: 'fk_comp_ref_currency',
        columnNames: ['id_currency'],
        referencedColumnNames: ['id'],
        referencedTableName: 'currency',
        // onDelete: "CASCADE"
      }));

      await queryRunner.query(' CREATE SEQUENCE company_id_seq;' +
                                     ' ALTER TABLE company' +
                                        ' ALTER COLUMN id SET DEFAULT NEXTVAL(\'company_id_seq\');');
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query('DROP SEQUENCE IF EXISTS company_id_seq CASCADE;');
      await queryRunner.dropTable('company');

      await queryRunner.query('DROP SEQUENCE IF EXISTS currency_id_seq CASCADE;');
      await queryRunner.dropTable('currency');
    }

}
