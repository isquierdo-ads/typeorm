import { Router } from 'express'
import { getRepository } from 'typeorm'
import CharClass from '../models/CharClass'
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

export default classRouter;