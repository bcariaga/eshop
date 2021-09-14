import { mapToProduct, mapToProductDetail } from "./product.js";

describe("Product", () => {
  it("mapToProduct must map api response to Product object ", () => {
    expect(mapToProduct(apiResponseProduct)).toMatchObject({
      id: "MLA799491318",
      title: "Mini Nodemcu D1 Wifi Esp8266 Esp12f 4mb Uart Arduino",
      price: {
        currency: "ARS",
        amount: 710,
        decimals: 0,
      },
      picture: "http://http2.mlstatic.com/D_846619-MLA40017465853_122019-I.jpg",
      condition: "new",
      free_shipping: false,
    });
  });
  it("mapToProductDetail must map api response to ProductDetail object", () => {
    expect(
      mapToProductDetail({
        ...apiResponseProductDetail,
        ...apiResponseProductDescription,
      })
    ).toMatchObject({
      id: "MLA630531908",
      title: "Nodemcu Wifi Esp8266 Lua Gpio Pwm I2c Uart Arduino Todomicro",
      price: {
        currency: "ARS",
        amount: 645,
        decimals: 0,
      },
      picture: "http://http2.mlstatic.com/D_935555-MLA46494007936_062021-I.jpg",
      condition: "new",
      free_shipping: false,
      sold_quantity: 500,
      description:
        "Visitá nuestra lista de articulos completa en el siguiente link ----> https://eshops.mercadolibre.com.ar/TODOMICRO EL Nodemcu Wifi Esp8266 es una placa de desarrollo que esta basada en el popular chip ESP8266. Con este sencillo modulo se puede realizar el prototipo de cualquier sistema para el loT (internet of things). ESPECIFICACIONES - LUA Script. - Procesador principal ESP8266 ESP-12E o ESP-12F. - Potencia de salida +19.5dBm en modo 802.11b. - 10 GPIO, cada GPIO puede ser PWM, I2C, 1-Wire. - Protocolo inalambrico 802.11 b/g/n. - Stack TCP/IP integrado. - Corriente en espera: < 10uA. - USB-TTL incluido, plug & Play. - Con Silab CP2102 y LDO onboard. - Hilera de pines de 2 x 2.56mm y 15 pines. - Botones de Reset y Flash. - Conector micro USB. - Open-source. - Antena PCB. LA COMPRA INCLUYE - 1 Nodemcu Wifi Esp8266. SKU: NODEMCU-CP2102 Visitá nuestra lista de articulos completa en el siguiente link ----> https://eshops.mercadolibre.com.ar/TODOMICRO",
    });
  });
});

const apiResponseProduct = {
  id: "MLA799491318",
  site_id: "MLA",
  title: "Mini Nodemcu D1 Wifi Esp8266 Esp12f 4mb Uart Arduino",
  seller: {},
  price: 710,
  prices: {},
  sale_price: null,
  currency_id: "ARS",
  available_quantity: 50,
  sold_quantity: 500,
  buying_mode: "buy_it_now",
  listing_type_id: "gold_special",
  stop_time: "2039-07-07T04:00:00.000Z",
  condition: "new",
  permalink:
    "https://articulo.mercadolibre.com.ar/MLA-799491318-mini-nodemcu-d1-wifi-esp8266-esp12f-4mb-uart-arduino-_JM",
  thumbnail: "http://http2.mlstatic.com/D_846619-MLA40017465853_122019-I.jpg",
  thumbnail_id: "846619-MLA40017465853_122019",
  accepts_mercadopago: true,
  installments: {},
  address: {},
  shipping: {
    free_shipping: false,
    mode: "me2",
    tags: [],
    logistic_type: "cross_docking",
    store_pick_up: true,
  },
  seller_address: {},
  attributes: [],
  original_price: null,
  category_id: "MLA372999",
  official_store_id: null,
  domain_id: "MLA-MICROCONTROLLER_BOARDS",
  catalog_product_id: null,
  tags: [],
  order_backend: 13,
  use_thumbnail_id: true,
  offer_score: null,
  offer_share: null,
};

const apiResponseProductDetail = {
  id: "MLA630531908",
  site_id: "MLA",
  title: "Nodemcu Wifi Esp8266 Lua Gpio Pwm I2c Uart Arduino Todomicro",
  subtitle: null,
  seller_id: 39384567,
  category_id: "MLA372999",
  official_store_id: null,
  price: 645,
  base_price: 645,
  original_price: null,
  currency_id: "ARS",
  initial_quantity: 10043,
  available_quantity: 5000,
  sold_quantity: 500,
  sale_terms: [],
  buying_mode: "buy_it_now",
  listing_type_id: "gold_special",
  start_time: "2016-08-08T14:41:13.000Z",
  stop_time: "2036-08-03T14:41:13.000Z",
  condition: "new",
  permalink:
    "https://articulo.mercadolibre.com.ar/MLA-630531908-nodemcu-wifi-esp8266-lua-gpio-pwm-i2c-uart-arduino-todomicro-_JM",
  thumbnail_id: "935555-MLA46494007936_062021",
  thumbnail: "http://http2.mlstatic.com/D_935555-MLA46494007936_062021-I.jpg",
  secure_thumbnail:
    "https://http2.mlstatic.com/D_935555-MLA46494007936_062021-I.jpg",
  pictures: [],
  video_id: null,
  descriptions: [],
  accepts_mercadopago: true,
  non_mercado_pago_payment_methods: [],
  shipping: {
    mode: "me2",
    methods: [],
    tags: ["self_service_in"],
    dimensions: null,
    local_pick_up: true,
    free_shipping: false,
    logistic_type: "cross_docking",
    store_pick_up: true,
  },
  international_delivery_mode: "none",
  seller_address: {},
  seller_contact: null,
  location: {},
  coverage_areas: [],
  attributes: [],
  warnings: [],
  listing_source: "",
  variations: [],
  status: "active",
  sub_status: [],
  tags: [],
  warranty: "Garantía del vendedor: 6 meses",
  catalog_product_id: null,
  domain_id: "MLA-MICROCONTROLLER_BOARDS",
  parent_item_id: null,
  differential_pricing: null,
  deal_ids: [],
  automatic_relist: false,
  date_created: "2016-08-08T14:41:13.000Z",
  last_updated: "2021-09-08T00:08:38.000Z",
  health: 0.87,
  catalog_listing: false,
  channels: [],
};

const apiResponseProductDescription = {
  text: "",
  plain_text:
    "Visitá nuestra lista de articulos completa en el siguiente link ----> https://eshops.mercadolibre.com.ar/TODOMICRO EL Nodemcu Wifi Esp8266 es una placa de desarrollo que esta basada en el popular chip ESP8266. Con este sencillo modulo se puede realizar el prototipo de cualquier sistema para el loT (internet of things). ESPECIFICACIONES - LUA Script. - Procesador principal ESP8266 ESP-12E o ESP-12F. - Potencia de salida +19.5dBm en modo 802.11b. - 10 GPIO, cada GPIO puede ser PWM, I2C, 1-Wire. - Protocolo inalambrico 802.11 b/g/n. - Stack TCP/IP integrado. - Corriente en espera: < 10uA. - USB-TTL incluido, plug & Play. - Con Silab CP2102 y LDO onboard. - Hilera de pines de 2 x 2.56mm y 15 pines. - Botones de Reset y Flash. - Conector micro USB. - Open-source. - Antena PCB. LA COMPRA INCLUYE - 1 Nodemcu Wifi Esp8266. SKU: NODEMCU-CP2102 Visitá nuestra lista de articulos completa en el siguiente link ----> https://eshops.mercadolibre.com.ar/TODOMICRO",
  last_updated: "2019-11-19T20:25:49.000Z",
  date_created: "2016-08-08T14:41:13.000Z",
  snapshot: {},
};
