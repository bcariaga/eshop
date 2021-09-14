import currency from "currency.js";

/**
 *
 * @param {object} param0 "blob" object to create a Price object
 * @returns Price object
 */
export const mapToPrice = ({ currency_id, price }) => {
  let priceAsCurrency = currency(price);

  return {
    currency: currency_id,
    amount: priceAsCurrency.dollars(),
    decimals: priceAsCurrency.cents(),
  };
};
