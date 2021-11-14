import { Router } from 'express'
import { getCustomRepository, getRepository } from 'typeorm'
import { CharRace } from '../models/CharRace'
import { validate } from 'class-validator'
import { CharRaceRepository } from '../repositories/CharRaceRepository'
import { } from 'class-validator'
const raceRouter = Router()

raceRouter.post('/', async (req, res) => {
  try {
    const repo = getRepository(CharRace)
    
    const { name, str, dex, vit } = req.body
    const charRace = repo.create({
      name,
      str,
      dex,
      vit
    });

    const errors = await validate(charRace)

    if (errors.length == 0) {
      const response =  await repo.save(charRace)
      return res.status(201).json(response)
    }
    return res.status(400).json(errors.map(v => v.constraints))
  } catch (err) {
    console.log('err.message :>> ', err);
    return res.status(400).send();
  }

})

raceRouter.get('/', async (req, res) => {
  console.log('get race')
  try {
    const repo = await getRepository(CharRace).find()
    return res.status(200).json(repo)

  } catch (error) {
    console.log(error)
  }
})

raceRouter.get('/:name', async (req, res) => {
  const repo = getCustomRepository(CharRaceRepository);
  const charRace = await repo.findByName(req.params.name)
  if (charRace.length !== 0) {
    return res.json(charRace)
  } else {
    return res.json(`Raça ${req.params.name} não encontrada`)
  }
})

raceRouter.delete('/:id', async (req, res) => {
  const paramsID = +req.params.id;
  try {
    const repo = await getRepository(CharRace);
    const classFound = repo.findOne({
      where: { id: paramsID },
    });
    if (!classFound) {
      return res.status(400).json('Raça não encontrada');
    }
    const response = await repo.delete({ id: paramsID });
    return res.status(204).json(response);
  } catch (error) {
    console.log(error);
  }
});

raceRouter.put('/:id/:newName', async (req, res) => {
  const paramsID = +req.params.id;
  const newName = req.params.newName;
  try {
    const repo = await getRepository(CharRace).findOne({
      where: { id: paramsID },
    });
    if (repo) {
      repo.name = newName;
      res.status(200).json(repo);
    } else {
      return res.status(400).json('Raça não encontrada');
    }
  } catch (error) {
    console.log(error);
  }
});

export default raceRouter;