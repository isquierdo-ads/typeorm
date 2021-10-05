import { Router } from 'express'
import { getCustomRepository, getRepository } from 'typeorm'
import CharClass from '../models/CharClass'
import { CharClassRepository } from '../repositories/CharClassRepository'
const classRouter = Router()

classRouter.post('/', async (req, res) => {
    console.log('oi')
    try {
        const repo = getRepository(CharClass)
        const response = await repo.save(req.body);
        return res.status(201).json(response)
    }
    catch (error) {
        console.log(error)
    }
})

classRouter.get('/', async (req, res) => {
    console.log('get')
    try {
        const repo = await getRepository(CharClass).find()
        return res.status(200).json(repo)

    } catch (error) {
        console.log(error)
    }
})

classRouter.get('/:name', async (req,res) => {
    const repo = getCustomRepository(CharClassRepository);
    const charclass = await repo.findByName(req.params.name)
    if (charclass.length !== 0){
        return res.json(charclass)
    } else {
        return res.json(`Classe ${req.params.name} não encontrada`)
    }
})

export default classRouter;