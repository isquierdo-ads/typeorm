import {EntityRepository, Repository} from "typeorm";
import CharClass from "../models/CharClass";

@EntityRepository(CharClass)
export class CharClassRepository extends Repository<CharClass> {

    findByName(name: string) {
        const CharClassFound = this.find({
            where:{name}
        })
        return CharClassFound
    }
}