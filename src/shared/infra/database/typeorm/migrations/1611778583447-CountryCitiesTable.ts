import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CountryCitiesTable1611778583447
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'country_cities',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'state_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'name',
            type: 'varchar',
            length: '60',
            isNullable: false,
          },
          {
            name: 'area_km2',
            type: 'numeric',
            precision: 8,
            scale: 3,
            isNullable: true,
          },
          {
            name: 'is_state_capital',
            type: 'boolean',
            isNullable: false,
            default: false,
          },
          {
            name: 'is_country_capital',
            type: 'boolean',
            isNullable: false,
            default: false,
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
      'country_cities',
      new TableForeignKey({
        name: 'fk_stateId_countryCities',
        columnNames: ['state_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'country_states',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'country_cities',
      'fk_stateId_countryCities',
    );
    await queryRunner.dropTable('country_cities');
  }
}
