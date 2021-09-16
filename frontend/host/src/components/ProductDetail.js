import React, {Suspense, useContext} from 'react';
import {Route} from 'wouter';
import {HostContext} from '../context';
const RemoteProductDetail = React.lazy(() => import('productDetail/App'));

const SearchBox = () => {
  const {state} = useContext(HostContext);
  const {categories} = state;
  return (
    <Route path="/items/:id">
      {(params) => {
        return (
          <Suspense fallback={'loading product detail'}>
            <RemoteProductDetail {...params} categories={categories }/>
          </Suspense>
        );
      }}
    </Route>
  );
};

export default SearchBox;
