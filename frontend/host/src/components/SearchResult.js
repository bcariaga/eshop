import React, { Suspense, useEffect } from "react";
import { Route } from "wouter";
import { useSearchParams } from "../hooks/useSearchParams";
const RemoteSearchResult = React.lazy(() => import("searchResult/App"));

const SearchBox = () => {
  const searchParams = useSearchParams();

  return (
    <Route path="/items">
      <Suspense fallback={"loading search results"}>
        <RemoteSearchResult {...searchParams} />
      </Suspense>
    </Route>
  );
};

export default SearchBox;
