import {useState, useEffect} from 'react';
// To cancel this all requests on this module.
const controller = new AbortController();
const emmitCancelSignal = () => controller.abort();


export const useProductSearch = (searchQuery) => {
  const [productsSearch, setProductsSearch] = useState('');
  useEffect(() => {
    console.log({searchQuery});
    const search = async () => {
      const searchResult = await getProducts(searchQuery);
      setProductsSearch(searchResult);
    };
    search();
  }, [searchQuery]);

  return [productsSearch, () => emmitCancelSignal()];
};

const getProducts = async (query) => {
  if (!query) {
    return;
  }
  try {
    const response = await fetch(
        `${process.env.SEARCH_API_URL}/items?search=${query}`,
        {signal: controller.signal});
    if (!response.ok) {
      throw new Error(response.status + response.statusText);
    }
    return await response.json();
  } catch (error) {
    console.error('an error has ocurred fetching the search result!!', error);
    // TODO: add error logging, (sentry??)
    return;
  }
};
