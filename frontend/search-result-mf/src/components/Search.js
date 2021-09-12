import React from 'react';
import SearchResult from './SearchResult';
import {useSearch} from '../hooks/useSearch';

const Search = ({query, onClickItem: handleClickItem}) => {
  const [searchResult] = useSearch(query);
  return (<SearchResult {...searchResult} onClickItem={handleClickItem}/>);
};

export default Search;
