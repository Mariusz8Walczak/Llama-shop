import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1735919364807 implements MigrationInterface {
    name = 'Migration1735919364807'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`products\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`category\` varchar(255) NOT NULL, \`price\` decimal(10,2) NOT NULL, \`image_url\` text NOT NULL, \`short_description\` varchar(500) NOT NULL, \`stock_status\` varchar(50) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`products\``);
    }

}
