import React, {Suspense, useEffect, useState} from 'react';
import {getSearchParamsAsObject} from '../commons/locationHelpers';
import {useRoute, useLocation} from 'wouter';

const RemoteSearchResult = React.lazy(() => import('searchResult/App'));
const route = '/items';
const SearchResult = () => {
  const [match, params] = useRoute(route);
  const [, setLocation] = useLocation();
  const [search, setSearch] = useState(getSearchParamsAsObject());
  useEffect(() => {
    setSearch(getSearchParamsAsObject().search);
  }, [match, params]);
  const handleClickItem = (itemId) => {
    setLocation(`/items/${itemId}`);
  };
  return (
    match &&
        <Suspense fallback={'loading search results'}>
          <RemoteSearchResult query={search} onClickItem={handleClickItem} />
        </Suspense>
  );
};

export default SearchResult;
