import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateAppointments1592091044498
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'consultas',
        columns: [
          {
            name: 'id_consulta',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'data_consulta',
            type: 'timestamp',
          },
          {
            name: 'cliente_id',
            type: 'uuid',
          },
          {
            name: 'profissional_id',
            type: 'uuid',
          },
          {
            name: 'marcada_em',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'atualizada_em',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'FK_cliente_id',
            columnNames: ['cliente_id'],
            referencedTableName: 'clientes',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
          },
          {
            name: 'FK_profissional_id',
            columnNames: ['profissional_id'],
            referencedTableName: 'profissionais',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('consultas', 'FK_cliente_id');
    await queryRunner.dropForeignKey('consultas', 'FK_profissional_id');
    await queryRunner.dropTable('consultas');
  }
}
