import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationPlayerClassRace1636858938971 implements MigrationInterface {
    name = 'RelationPlayerClassRace1636858938971'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "char_race" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "str" integer NOT NULL, "dex" integer NOT NULL, "vit" integer NOT NULL, CONSTRAINT "PK_4dd509fdd082a93b8008bc97929" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "player" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "str" integer NOT NULL, "dex" integer NOT NULL, "vit" integer NOT NULL, "charRaceId" integer, CONSTRAINT "REL_3224a47ab95e041f0ee3bbc290" UNIQUE ("charRaceId"), CONSTRAINT "PK_65edadc946a7faf4b638d5e8885" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "char_class" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "str" integer NOT NULL, "dex" integer NOT NULL, "vit" integer NOT NULL, "playerId" integer, CONSTRAINT "PK_8509dbc6f218f51727056c71ee5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "player" ADD CONSTRAINT "FK_3224a47ab95e041f0ee3bbc2908" FOREIGN KEY ("charRaceId") REFERENCES "char_race"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "char_class" ADD CONSTRAINT "FK_ee3bb0919438e971dc555690c5c" FOREIGN KEY ("playerId") REFERENCES "player"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "char_class" DROP CONSTRAINT "FK_ee3bb0919438e971dc555690c5c"`);
        await queryRunner.query(`ALTER TABLE "player" DROP CONSTRAINT "FK_3224a47ab95e041f0ee3bbc2908"`);
        await queryRunner.query(`DROP TABLE "char_class"`);
        await queryRunner.query(`DROP TABLE "player"`);
        await queryRunner.query(`DROP TABLE "char_race"`);
    }

}
