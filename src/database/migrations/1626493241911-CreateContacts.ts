import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateContacts1626493241911 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'contacts',
                columns: [
                    
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name: 'name',
                        type: 'varchar'
                    },
                    {
                        name: 'last_name',
                        type: 'varchar'
                    },

                    {
                        name: 'created_At',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'updated_At',
                        type: 'timestamp',
                        default: 'now()'
                    }

                ],
                //foreignKeys: [
                     //{
                         // name: "FKcompaniesContactsName",
                         // referencedTableName: "companies",
                         // referencedColumnNames: ["title"],
                         // columnNames: ["companiesId"],
                         // onDelete: "SET NULL",
                         // onUpdate: "SET NULL",
                     // }
                //     {
                //         name: "FKcompaniesContactsLast_name",
                //         referencedTableName: "companies",
                //         referencedColumnNames: ["id"],
                //         columnNames: ["last_name"],
                //         onDelete: "SET NULL",
                //         onUpdate: "SET NULL",
                //     },

                 //]


            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('contacts')
    }

}
