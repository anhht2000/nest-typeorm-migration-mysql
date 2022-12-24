import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateUserAddPassword1671884315112 implements MigrationInterface {
    name = 'UpdateUserAddPassword1671884315112'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`password\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`password\``);
    }

}
