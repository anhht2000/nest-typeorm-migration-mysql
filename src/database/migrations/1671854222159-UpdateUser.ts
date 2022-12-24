import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateUser1671854222159 implements MigrationInterface {
    name = 'UpdateUser1671854222159'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`heigth\` int NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`heigth\``);
    }

}
