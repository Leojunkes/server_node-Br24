import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationContactsCompanies1629010798472 implements MigrationInterface {
    name = 'RelationContactsCompanies1629010798472'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_contacts" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "last_name" varchar NOT NULL, "created_At" datetime NOT NULL DEFAULT (datetime('now')), "updated_At" datetime NOT NULL DEFAULT (datetime('now')), "companiesId" varchar, "name1" varchar, "last_name1" varchar, CONSTRAINT "FK_5e1589f98ed5a6e8477bc2af029" FOREIGN KEY ("companiesId") REFERENCES "companies" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_contacts"("id", "name", "last_name", "created_At", "updated_At", "companiesId", "name1", "last_name1") SELECT "id", "name", "last_name", "created_At", "updated_At", "companiesId", "name1", "last_name1" FROM "contacts"`);
        await queryRunner.query(`DROP TABLE "contacts"`);
        await queryRunner.query(`ALTER TABLE "temporary_contacts" RENAME TO "contacts"`);
        await queryRunner.query(`CREATE TABLE "temporary_contacts" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "last_name" varchar NOT NULL, "created_At" datetime NOT NULL DEFAULT (datetime('now')), "updated_At" datetime NOT NULL DEFAULT (datetime('now')), "companiesId" varchar, "name1" varchar NOT NULL, "last_name1" varchar NOT NULL, CONSTRAINT "FK_5e1589f98ed5a6e8477bc2af029" FOREIGN KEY ("companiesId") REFERENCES "companies" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_contacts"("id", "name", "last_name", "created_At", "updated_At", "companiesId", "name1", "last_name1") SELECT "id", "name", "last_name", "created_At", "updated_At", "companiesId", "name1", "last_name1" FROM "contacts"`);
        await queryRunner.query(`DROP TABLE "contacts"`);
        await queryRunner.query(`ALTER TABLE "temporary_contacts" RENAME TO "contacts"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" RENAME TO "temporary_contacts"`);
        await queryRunner.query(`CREATE TABLE "contacts" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "last_name" varchar NOT NULL, "created_At" datetime NOT NULL DEFAULT (datetime('now')), "updated_At" datetime NOT NULL DEFAULT (datetime('now')), "companiesId" varchar, "name1" varchar, "last_name1" varchar, CONSTRAINT "FK_5e1589f98ed5a6e8477bc2af029" FOREIGN KEY ("companiesId") REFERENCES "companies" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "contacts"("id", "name", "last_name", "created_At", "updated_At", "companiesId", "name1", "last_name1") SELECT "id", "name", "last_name", "created_At", "updated_At", "companiesId", "name1", "last_name1" FROM "temporary_contacts"`);
        await queryRunner.query(`DROP TABLE "temporary_contacts"`);
        await queryRunner.query(`ALTER TABLE "contacts" RENAME TO "temporary_contacts"`);
        await queryRunner.query(`CREATE TABLE "contacts" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "last_name" varchar NOT NULL, "created_At" datetime NOT NULL DEFAULT (datetime('now')), "updated_At" datetime NOT NULL DEFAULT (datetime('now')), "companiesId" varchar, "name1" varchar, "last_name1" varchar, CONSTRAINT "FK_5e1589f98ed5a6e8477bc2af029" FOREIGN KEY ("companiesId") REFERENCES "companies" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_5e1589f98ed5a6e8477bc2af029" FOREIGN KEY ("companiesId") REFERENCES "companies" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_5e1589f98ed5a6e8477bc2af029" FOREIGN KEY ("companiesId") REFERENCES "companies" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "contacts"("id", "name", "last_name", "created_At", "updated_At", "companiesId", "name1", "last_name1") SELECT "id", "name", "last_name", "created_At", "updated_At", "companiesId", "name1", "last_name1" FROM "temporary_contacts"`);
        await queryRunner.query(`DROP TABLE "temporary_contacts"`);
    }

}
