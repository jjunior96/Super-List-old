import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ProductController from './app/controllers/ProductController';
import ListController from './app/controllers/ListController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);

routes.post('/sessions', SessionController.store);
routes.post('/products', ProductController.store);

routes.post('/users/:user_id/lists', ListController.store);

routes.put('/users', UserController.update);

export default routes;
