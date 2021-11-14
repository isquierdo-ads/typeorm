import { EntityRepository, Repository } from "typeorm";
import Player from "../models/Player";

@EntityRepository(Player)
export class PlayerRepository extends Repository<Player> {

    findByName(name: string) {
        const PlayerFound = this.find({
            where: { name }
        })
        return PlayerFound
    }
}