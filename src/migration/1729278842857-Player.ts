import { MigrationInterface, QueryRunner } from "typeorm";

export class Player1729278842857 implements MigrationInterface {
    name = 'Player1729278842857'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "player" ("id" SERIAL NOT NULL, "createdBy" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedBy" character varying, "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedBy" character varying, "deletedAt" TIMESTAMP, "fullname" character varying NOT NULL, "birthDate" TIMESTAMP NOT NULL, "weight" double precision NOT NULL, "height" double precision NOT NULL, "position" character varying NOT NULL, "alternativePosition" character varying NOT NULL, "weakFoot" character varying NOT NULL, "aditionalInfo" character varying NOT NULL, CONSTRAINT "PK_65edadc946a7faf4b638d5e8885" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "player"`);
    }

}
