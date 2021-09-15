import React, {useState} from 'react';
import {HostContext} from './context';
import SearchBox from './components/SearchBox';
import SearchResult from './components/SearchResult';
import ProductDetail from './components/ProductDetail';
import {ErrorBoundary} from './ErrorBoundary';
const App = () => {
  const [query, setQuery] = useState(null);

  return (
    <ErrorBoundary>
      <HostContext.Provider value={{query, setQuery}}>
        <SearchBox/>
        <SearchResult />
        <ProductDetail />
      </HostContext.Provider>
    </ErrorBoundary>

  );
};
export default App;
