import {useState, useEffect} from 'react';

/**
 * Get the current search params from url
 * (window.location.search) and map to object
 * @return {object} Object with QueryParams as key and values
 * E.g.: ?search=pepe&sort=10 -> {search: "pepe", sort: "10"}
 */
const getSearchParamsAsObject = () =>
  /**
   * Make an matrix with current location search params:
   * [["paramName", "paramValue"], ["paramName", "paramValue"], ...]
   */
  Array.from(new URLSearchParams(window.location.search).entries())
      .map((keyAndParam) => ({
      /**
       *  map the matrix to plain array of object
       * because it's more easy to use the reduce
      */
        [keyAndParam[0]]: keyAndParam[1],
      }))
  /* merge objects into one object */
      .reduce((acc, item) => ({...acc, ...item}), {});

export const useSearchParams = () => {
  const [searchParams, setSearchParams] = useState(getSearchParamsAsObject());
  const [paramsHasChange, setParamsHasChange] = useState(false);

  // need this reference of handler to
  // remove event after when the component is dismounted
  const eventHandler = () => {
    console.log('aatached!');
    setParamsHasChange(!paramsHasChange);
  };

  window.addEventListener('locationchange', eventHandler);

  useEffect(() => {
    setSearchParams(getSearchParamsAsObject());
    return () => {
      window.removeEventListener('locationchange', eventHandler);
    };
  }, [paramsHasChange]);

  return searchParams;
};
