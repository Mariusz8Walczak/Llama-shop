import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1736296802787 implements MigrationInterface {
    name = 'Migration1736296802787'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`products\` CHANGE \`price\` \`price\` decimal(10,0) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`products\` CHANGE \`price\` \`price\` decimal(10,2) NOT NULL`);
    }

}
