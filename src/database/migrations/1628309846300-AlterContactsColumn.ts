import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterContactsColumn1628309846300 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('contacts', new TableColumn(
            {
                name: 'name1',
                type: 'varchar',
                isNullable: true
            }

))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('contacts', 'name1')
    }

}
