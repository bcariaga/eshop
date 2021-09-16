import React, {useReducer} from 'react';
import {HostContext} from './context';
import SearchBox from './components/SearchBox';
import SearchResult from './components/SearchResult';
import ProductDetail from './components/ProductDetail';
import {ErrorBoundary} from './ErrorBoundary';

const reducer = (state, {type, payload}) => {
  switch (type) {
    case 'ADD_CATEGORY':
      return {...state, categories: payload};
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, {});
  return (
    <ErrorBoundary>
      <HostContext.Provider value={{state, dispatch}}>
        <SearchBox/>
        <SearchResult />
        <ProductDetail />
      </HostContext.Provider>
    </ErrorBoundary>

  );
};
export default App;
