import {httpClient} from './commons/httpclient.js';
import {mapToProduct, mapToProductDetail} from '../models/product.js';
import {mapToCategories} from '../models/category.js';
/**
 * Finds products with query
 * @param {string} query search query to find products
 * @return {any} findResult found
 */
export const findProducts = async (query = '') => {
  try {
    const productsResponse = await httpClient.get(
        `sites/MLA/search?q=${query}&limit=10`, /* TODO: remove this hardcore (limit) when implements pagination. */
    );
    const productsData = productsResponse.data;
    return {
      categories: mapToCategories(productsData),
      items: productsData.results.map((p) => mapToProduct(p)),
    };
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getProductDetail = async (id) => {
  try {
    const [{value: produtDetailResult}, {value: productDescriptionResult}] =
      await Promise.allSettled([getProduct(id), getProductDescription(id)]);
    return mapToProductDetail({
      ...produtDetailResult.data,
      ...productDescriptionResult.data,
    }); // warning! if dtos have props with equal name will be substituted
  } catch (error) {
    console.error(error);
    return null;
  }
};

/**
 * Get the product by Id
 * @param {string} id Id of product
 * @return {object} product
 */
const getProduct = async (id = '') => {
  try {
    return await httpClient.get(`items/${id}`);
  } catch (error) {
    console.error(error);
    return null;
  }
};

/**
 * Get the description of Product
 * @param {string} id Id of product
 * @return{any} description of product
 */
const getProductDescription = async (id = '') => {
  try {
    return await httpClient.get(`items/${id}/description`);
  } catch (error) {
    console.error(error);
    return null;
  }
};

