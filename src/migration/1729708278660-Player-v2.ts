import { MigrationInterface, QueryRunner } from "typeorm";

export class PlayerV21729708278660 implements MigrationInterface {
    name = 'PlayerV21729708278660'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "player" ADD "strongFoot" character varying`);
        await queryRunner.query(`ALTER TABLE "player" ALTER COLUMN "birthDate" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "player" ALTER COLUMN "alternativePosition" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "player" ALTER COLUMN "weakFoot" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "player" ALTER COLUMN "weakFoot" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "player" ALTER COLUMN "alternativePosition" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "player" ALTER COLUMN "birthDate" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "player" DROP COLUMN "strongFoot"`);
    }

}
