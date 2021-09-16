import React, {useEffect} from 'react';
import SearchResult from './SearchResult';
import {useSearch} from '../hooks/useSearch';

const Search = ({query, onClickItem: handleClickItem, onSearch}) => {
  const [searchResult] = useSearch(query);
  useEffect(() => {
    if (onSearch && searchResult) {
      onSearch(searchResult);
    }
  }, [searchResult]);
  return (<SearchResult {...searchResult} onClickItem={handleClickItem}/>);
};

export default Search;

Search.propTypes = SearchResult.propTypes;
