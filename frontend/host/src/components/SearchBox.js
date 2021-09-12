import React, {Suspense} from 'react';
import {getSearchParamsAsObject} from '../commons/locationHelpers';
import {Route, useLocation} from 'wouter';
const RemoteSearchBox = React.lazy(() => import('searchBox/App'));

const SearchBox = () => {
  const [, setLocation] = useLocation();
  const {search} = getSearchParamsAsObject();
  const handleSearch = (q) => {
    if (q) {
      setLocation(`/items?search=${q}`);
    }
  };
  return (
    <Route path="/:rest*">
      <Suspense fallback={'loading search box...'}>
        <RemoteSearchBox
          onSearch={handleSearch}
          current={search} />
      </Suspense>
    </Route>
  );
};

export default SearchBox;
