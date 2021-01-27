import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class StatesTable1611778453231 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'states',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'region_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'name',
            type: 'varchar',
            length: '25',
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
      'states',
      new TableForeignKey({
        name: 'fk_regionId_states',
        columnNames: ['region_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'regions',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('states', 'fk_regionId_states');
    await queryRunner.dropTable('states');
  }
}
