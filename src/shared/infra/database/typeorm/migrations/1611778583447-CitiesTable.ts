import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CitiesTable1611778583447 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'cities',
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
      'cities',
      new TableForeignKey({
        name: 'fk_stateId_cities',
        columnNames: ['state_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'states',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('cities', 'fk_stateId_cities');
    await queryRunner.dropTable('cities');
  }
}
