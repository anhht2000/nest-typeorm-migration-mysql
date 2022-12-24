import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateUser1671854269297 implements MigrationInterface {
    name = 'UpdateUser1671854269297'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`age\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`age\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`heigth\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`heigth\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`heigth\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`heigth\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`age\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`age\` int NOT NULL`);
    }

}
