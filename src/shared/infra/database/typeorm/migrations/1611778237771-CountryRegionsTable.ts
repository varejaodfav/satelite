import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CountryRegionsTable1611778237771
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'country_regions',
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
            length: '12',
            isNullable: false,
          },
          {
            name: 'abbreviation',
            type: 'char',
            length: '2',
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

    await queryRunner.createForeignKey(
      'country_regions',
      new TableForeignKey({
        name: 'fk_countryId_countryRegions',
        columnNames: ['country_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'countries',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'country_regions',
      'fk_countryId_countryRegions',
    );
    await queryRunner.dropTable('country_regions');
  }
}
