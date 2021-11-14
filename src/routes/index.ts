import { Router } from 'express';
import classRouter from './class.routes';
import playerRouter from './player.routes';
import raceRouter from './race.routes';

const routes = Router();
routes.use('/class', classRouter);
routes.use('/race', raceRouter);
routes.use('/player', playerRouter);

export default routes;
