import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class CharRace {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    dex: number;

    @Column()
    vit: number;
}
