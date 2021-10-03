import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
class CharClass {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    str: number;

    @Column()
    dex: number;

    @Column()
    vit: number;
}

export default CharClass