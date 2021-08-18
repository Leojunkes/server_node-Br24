import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCompanies1626235201791 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'companies',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name: 'title',
                        type: 'varchar'
                    },
                    {
                        name: 'created_At',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'update_At',
                        type: 'timestamp',
                        default: 'now()'
                    }

                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('companies')
    }

}
