import {mapToPrice} from './price.js';

/**
 * maps api response (from https://api.mercadolibre.com/sites/MLA/search) to Product's model
 * @param {object} param0 "blob" object to create a Product object
 * @return Product
 */
export const mapToProduct = ({
  id,
  title,
  currency_id,
  price,
  thumbnail,
  condition,
  shipping: {free_shipping},
}) => ({
  id: id,
  title: title,
  price: mapToPrice({currency_id, price}),
  picture: thumbnail,
  condition: condition,
  free_shipping: free_shipping,
});

export const mapToProductDetail = ({
  id,
  title,
  currency_id,
  price,
  thumbnail,
  condition,
  shipping: {free_shipping},
  sold_quantity,
  plain_text,
}) => ({
  ...mapToProduct({
    id,
    title,
    currency_id,
    price,
    thumbnail,
    condition,
    shipping: {free_shipping},
  }),
  sold_quantity,
  description: plain_text,
});
