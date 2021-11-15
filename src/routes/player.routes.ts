import { Router } from 'express'
import { getConnection, getCustomRepository, getRepository } from 'typeorm'
import Player from '../models/Player'
const playerRouter = Router()

playerRouter.post('/', async (req, res) => {
  try {
    const repo = getRepository(Player)
    const response = await repo.save(req.body);
    await getConnection().queryResultCache?.remove(['listPlayer']);
    return res.status(201).json(response)
  }
  catch (error) {
    console.log(error)
  }
})

playerRouter.get('/', async (req, res) => {
  try {
    const repo = await getRepository(Player).find({
      cache: { id: 'listPlayer', milliseconds: 10000 }
    });

    return res.status(200).json(repo)

  } catch (error) {
    console.log(error)
  }
}
);

export default playerRouter;