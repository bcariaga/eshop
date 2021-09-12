import React, {useState} from 'react';
import {HostContext} from './context';
import SearchBox from './components/SearchBox';
import SearchResult from './components/SearchResult';
import ProductDetail from './components/ProductDetail';

const App = () => {
  const [query, setQuery] = useState(null);

  return (
    <HostContext.Provider value={{query, setQuery}}>
      <SearchBox/>
      <SearchResult />
      <ProductDetail />
    </HostContext.Provider>
  );
};
export default App;
