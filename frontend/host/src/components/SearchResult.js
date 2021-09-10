import React, { Suspense, useEffect } from "react";
import { Route, useLocation } from "wouter";
const RemoteSearchResult = React.lazy(() => import("searchResult/App"));

const SearchBox = () => {
  const [location, setLocation] = useLocation();
  useEffect(() => {
    console.log(location);
  }, [location]);
  return (
    <Route path="/items">
      {(params) => {
        console.log(params);
        return (
          <Suspense fallback={"loading search results"}>
            <RemoteSearchResult {...params} />
          </Suspense>
        );
      }}
    </Route>
  );
};

export default SearchBox;
