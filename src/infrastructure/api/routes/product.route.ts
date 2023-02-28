import { Router } from 'express';
import CreateProductController from '../../../adapters/controllers/product/create/create.product.controller';

const productRoute = Router();

const createProductController = new CreateProductController();

productRoute.post('/', createProductController.handle);

export { productRoute };
