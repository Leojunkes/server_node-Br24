import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterColumncompanies1629858718579 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('companies',new TableColumn({
            name:'email',
            type:'varchar',
            isNullable:true
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('companies','email')
    }

}
