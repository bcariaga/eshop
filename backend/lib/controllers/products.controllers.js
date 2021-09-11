import e from 'express';
import {
  findProducts,
  getProductDetail as fetchProductDetail,
} from '../services/products.services.js';
import {ok, notFound, badRequest} from './commons/responses.commons.js';

/**
 * Find products.
 * @param {e.Request} req
 * @param {e.Response} res
 */
export const getProducts = async (req, res) => {
  const query = req.query.search;
  const findResult = await findProducts(query);
  const anyProductFound = (findResult.items || []).length > 0;
  // TODO: add helpers functions to req object: req.notFound(msg);
  if (anyProductFound) {
    ok(res, findResult);
  } else {
    notFound(res, `not found products with query: ${query}`);
  }
};

/**
 * Get the detail of product
 * @param {e.Request} req
 * @param {e.Response} res
 */
export const getProductDetail = async (req, res) => {
  const productId = req.params.id;
  if (!productId) {
    badRequest(res, {msg: 'Id is required!'});
  }
  const detail = await fetchProductDetail(productId);

  if (detail) {
    ok(res, detail);
  } else {
    notFound(res, `not found product with id: ${query}`);
  }
};
