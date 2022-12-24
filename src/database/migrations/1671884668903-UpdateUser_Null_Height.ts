import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateUserNullHeight1671884668903 implements MigrationInterface {
    name = 'UpdateUserNullHeight1671884668903'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`heigth\` \`heigth\` int NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`heigth\` \`heigth\` int NOT NULL`);
    }

}
