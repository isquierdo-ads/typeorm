import { Router } from 'express'
import { getCustomRepository, getRepository } from 'typeorm'
import Player from '../models/Player'
const playerRouter = Router()

playerRouter.post('/', async (req, res) => {
  console.log(req.body)
  try {
    const repo = getRepository(Player)
    const response = await repo.save(req.body);
    return res.status(201).json(response)
  }
  catch (error) {
    console.log(error)
  }
})

playerRouter.get('/', async (req, res) => {
  console.log('get player')
  try {
    const repo = await getRepository(Player).find()
    console.log(repo)

    return res.status(200).json(repo)

  } catch (error) {
    console.log(error)
  }
}
);

export default playerRouter;