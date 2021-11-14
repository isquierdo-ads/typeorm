import {EntityRepository, Repository} from "typeorm";
import {CharRace} from "../models/CharRace";

@EntityRepository(CharRace)
export class CharRaceRepository extends Repository<CharRace> {

    findByName(name: string) {
        const CharRaceFound = this.find({
            where:{name}
        })
        return CharRaceFound
    }
}