import React, { Suspense } from "react";
import { Route } from "wouter";
const RemoteProductDetail = React.lazy(() => import("productDetail/App"));

const SearchBox = () => (
  <Route path="/items/:id">
    {(params) => {
      return (
        <Suspense fallback={"loading product detail"}>
          <RemoteProductDetail {...params} />
        </Suspense>
      );
    }}
  </Route>
);

export default SearchBox;
