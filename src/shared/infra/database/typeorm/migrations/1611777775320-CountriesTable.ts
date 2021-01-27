import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class ContriesTable1611777775320 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'countries',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
            length: '60',
            isNullable: false,
          },
          {
            name: 'iso3166_digram',
            type: 'char',
            length: '2',
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'iso3166_trigram',
            type: 'char',
            length: '3',
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'icao_codes',
            type: 'varchar',
            isArray: true,
            isNullable: false,
          },
          {
            name: 'dialing_codes',
            type: 'varchar',
            isArray: true,
            isNullable: false,
          },
          {
            name: 'currency',
            type: 'varchar',
            length: '40',
            isNullable: false,
          },
          {
            name: 'currency_symbol',
            type: 'varchar',
            length: '3',
            isNullable: false,
          },
          {
            name: 'currency_iso4217_code',
            type: 'char',
            length: '3',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamptz',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamptz',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('countries');
  }
}
