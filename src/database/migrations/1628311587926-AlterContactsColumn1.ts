import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterContactsColumn11628311587926 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('contacts', new TableColumn({
            name: 'last_name1',
            type: 'varchar',
            isNullable:true
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('contacts', 'last_name1')
    }

}
