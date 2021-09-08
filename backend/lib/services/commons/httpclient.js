import axios from "axios";

/**
 * Internal state of Module.
 * this approach is like Singleton.
 * Have only one instance of axios =)
 */
const state = {
  ready: false,
  currentClient: {},
};

const createHttpClient = () => {
  if (state.ready) {
    return state.currentClient;
  }
  state.currentClient = axios.create({ baseURL: process.env.API_URL });
  //TODO: add middlewares
  return state.currentClient;
};
/**
 * client for http requests.
 * configurated by .env file
 */
export const httpClient = createHttpClient();
