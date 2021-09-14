import { mapToPrice } from "./price";

describe("Price", () => {
  it("mapToPrice must map api response to Price object", () => {
    const [amount, decimals] = apiResponse.price.toString().split("."); //this only works here because i know the decimals separator char

    expect(mapToPrice(apiResponse)).toMatchObject({
      currency: apiResponse.currency_id,
      amount: parseInt(amount),
      decimals: parseInt(decimals || 0),
    });
  });
});

const apiResponse = {
  //...others props
  currency_id: "ARS",
  price: 3199.99,
};
