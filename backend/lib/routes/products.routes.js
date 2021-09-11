import express from 'express';
import {authorMiddleware} from '../middleware/author.middleware.js';
import * as controller from '../controllers/products.controllers.js';

// eslint-disable-next-line new-cap
const router = express.Router();
router.use(authorMiddleware);
router.get('/', controller.getProducts);
router.get('/:id', controller.getProductDetail);

export default router;
