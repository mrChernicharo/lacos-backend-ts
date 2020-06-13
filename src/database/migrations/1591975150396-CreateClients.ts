import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateClients1591975150396 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'clientes',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'nome',
            type: 'varchar',
          },
          {
            name: 'sobrenome',
            type: 'varchar',
          },
          {
            name: 'cpf',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'email',
            type: 'varchar',
          },
          {
            name: 'tel',
            type: 'varchar',
          },
          {
            name: 'data_nasc',
            type: 'date',
          },
          {
            name: 'data_cadastro',
            type: 'timestamp with time zone',
            default: 'now()',
          },
          {
            name: 'atualizado_em',
            type: 'timestamp with time zone',
            default: 'now()',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('clientes');
  }
}
