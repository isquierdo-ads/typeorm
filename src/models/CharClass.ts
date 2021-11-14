import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import Player from "./Player";

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


    @ManyToOne(() => Player, player => player.charClass)
    player: Player;

}

export default CharClass

