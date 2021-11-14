import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import Player from './Player';
import { IsString, Length, IsInt, Min, Max } from 'class-validator';

@Entity()
export class CharRace {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsString()
    @Length(3, 20, { message: 'Um nome precisa de 3 a 20 caracteres.' })
    name: string;

    @Column()
    @Min(1, { message: 'Precisa ter no minimo 1 de atributo e no maximo 20.' })
    @Max(20, { message: 'Precisa ter no minimo 1 de atributo e no maximo 20.' })
    @IsInt()
    str: number;

    @Column()
    @Min(1, { message: 'Precisa ter no minimo 1 de atributo e no maximo 20.' })
    @Max(20, { message: 'Precisa ter no minimo 1 de atributo e no maximo 20.' })
    @IsInt()
    dex: number;

    @Column()
    @Min(1, { message: 'Precisa ter no minimo 1 de atributo e no maximo 20.' })
    @Max(20, { message: 'Precisa ter no minimo 1 de atributo e no maximo 20.' })
    @IsInt()
    vit: number;

    @OneToOne(() => Player, player => player.charRace)
    player: Player;

}
