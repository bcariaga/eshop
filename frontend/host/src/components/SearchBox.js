import React, {Suspense} from 'react';
import {Route} from 'wouter';
const RemoteSearchBox = React.lazy(() => import('searchBox/App'));

const SearchBox = () => (
  <Route path="/:rest*">
    <Suspense fallback={'loading search box...'}>
      <RemoteSearchBox />
    </Suspense>
  </Route>
);

export default SearchBox;
