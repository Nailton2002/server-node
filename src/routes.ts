import express from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

//index = para listar itens
routes.get('/items', itemsController.index);

//create = para criar pontos
routes.post('/points', pointsController.create);
//index = para listar pontos
routes.get('/points', pointsController.index);
//show = exibi um unico registro
routes.get('/points/:id', pointsController.show);
//delelte = para deletar


export default routes;