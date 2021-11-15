import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { MyCrypto } from "../helpers/crypto";
import CharClass from "./CharClass";
import { CharRace } from "./CharRace";
@Entity()
class Player {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        nullable: false,
        transformer: MyCrypto,
    })
    name: string;

    @Column()
    str: number;

    @Column()
    dex: number;

    @Column()
    vit: number;

    @OneToOne(() => CharRace, charRace => charRace.player, { eager: true, cascade: true })
    @JoinColumn()
    charRace: CharRace;


    @OneToMany(() => CharClass, charClass => charClass.player, { cascade: true })
    charClass: CharClass[];

}

export default Player



