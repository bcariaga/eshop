import React, {Suspense, useEffect, useState, useContext} from 'react';
import {getSearchParamsAsObject} from '../commons/locationHelpers';
import {useRoute, useLocation} from 'wouter';
import {HostContext} from '../context';

const RemoteSearchResult = React.lazy(() => import('searchResult/App'));
const route = '/items';
const SearchResult = () => {
  const [match, params] = useRoute(route);
  const [, setLocation] = useLocation();
  const {dispatch} = useContext(HostContext);
  const [search, setSearch] = useState(getSearchParamsAsObject());
  useEffect(() => {
    setSearch(getSearchParamsAsObject().search);
  }, [match, params]);
  const handleClickItem = (itemId) => {
    setLocation(`/items/${itemId}`);
  };
  const handleSearch = ({categories}) => {
    dispatch({type: 'ADD_CATEGORY', payload: categories});
  };
  return (
    match && (
      <Suspense fallback={'loading search results'}>
        <RemoteSearchResult
          query={search}
          onClickItem={handleClickItem}
          onSearch={handleSearch}
        />
      </Suspense>
    )
  );
};

export default SearchResult;
