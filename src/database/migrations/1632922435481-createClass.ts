import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateClass1632922435481 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "charClass",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: "uuid",
                        default: "uuid_generate_v4()"
                    },
                    {
                        name: 'name', type: "varchar"
                    },
                    {
                        name: 'str', type: "integer"
                    },
                    {
                        name: 'dex', type: "integer"
                    },
                    {
                        name: 'vit', type: "integer"
                    },

                ]
            })
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('charClass')
    }
}
