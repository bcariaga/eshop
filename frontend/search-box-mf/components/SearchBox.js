import React, {useState, useEffect} from 'react';
import {useProductSearch} from '../hooks/useProductSeach';

const dummySearch = (query) =>
  console.warn('onSearch prop was not passed to search-box-mf!!!', query);


const SearchBox = ({onSearch = dummySearch}) => {
  const [searchQuery, setSearchQuery] = useState(null);
  const [searchResult, cancelSearch] = useProductSearch(searchQuery);
  useEffect(() => {
    console.log(searchResult);
  }, [searchResult]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    if (search) {
      setSearchQuery(search);
    }
  };

  useEffect(() => {
    onSearch(searchQuery);
    () => cancelSearch();
  }, [searchQuery]);


  return (
    <div>
      <div
        style={{
          margin: '10px',
          padding: '10px',
          textAlign: 'center',
          backgroundColor: 'greenyellow',
        }}
      >
        <h1>Search box!</h1>
        <form onSubmit={handleSubmit}>
          <input name="search" type="text" />
          <input type="submit" value="buscar" />
        </form>
      </div>
    </div>
  );
};
export default SearchBox;
