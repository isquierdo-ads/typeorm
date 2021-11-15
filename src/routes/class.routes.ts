import { Router } from 'express'
import { getConnection, getCustomRepository, getRepository } from 'typeorm'
import CharClass from '../models/CharClass'
import { CharClassRepository } from '../repositories/CharClassRepository'
const classRouter = Router()

classRouter.post('/', async (req, res) => {
  try {
    const repo = getRepository(CharClass)
    const response = await repo.save(req.body);
    await getConnection().queryResultCache?.remove(['listClass']);
    return res.status(201).json(response)
  }
  catch (error) {
    console.log(error)
  }
})

classRouter.get('/', async (req, res) => {
  console.log('get class')

  try {
    const repo = await getRepository(CharClass).find({
      cache: { id: 'listClass', milliseconds: 10000 }
    });
    return res.status(200).json(repo)

  } catch (error) {
    console.log(error)
  }
})

classRouter.get('/:name', async (req, res) => {
  const repo = getCustomRepository(CharClassRepository);
  const charclass = await repo.findByName(req.params.name)
  if (charclass.length !== 0) {
    return res.json(charclass)
  } else {
    return res.json(`Classe ${req.params.name} não encontrada`)
  }
})

classRouter.delete('/:id', async (req, res) => {
  const paramsID = +req.params.id;
  try {
    const repo = await getRepository(CharClass);
    const classFound = repo.findOne({
      where: { id: paramsID },
    });
    if (!classFound) {
      return res.status(400).json('Classe não encontrada');
    }
    const response = await repo.delete({ id: paramsID });
    return res.status(204).json(response);
  } catch (error) {
    console.log(error);
  }
});

classRouter.put('/:id/:newName', async (req, res) => {
  const paramsID = +req.params.id;
  const newName = req.params.newName;
  try {
    const repo = await getRepository(CharClass).findOne({
      where: { id: paramsID },
    });
    if (repo) {
      repo.name = newName;
      res.status(200).json(repo);
    } else {
      return res.status(400).json('Classe não encontrada');
    }
  } catch (error) {
    console.log(error);
  }
});

export default classRouter;