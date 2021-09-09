import React, { Suspense } from "react";
const RemoteSearchBox = React.lazy(() => import("searchBox/App"));
const RemoteSearchResult = React.lazy(() => import("searchResult/App"));
const RemoteProductDetail = React.lazy(() => import("productDetail/App"));

const App = () => {
  return (
    <div>
      <div
        style={{
          margin: "10px",
          padding: "10px",
          textAlign: "center",
          backgroundColor: "cyan",
        }}
      >
        <h1>Host</h1>
      </div>
      <Suspense fallback={"loading..."}>
        <RemoteSearchBox />
      </Suspense>
      <Suspense fallback={"loading..."}>
        <RemoteSearchResult />
      </Suspense>
      <Suspense fallback={"loading..."}>
        <RemoteProductDetail />
      </Suspense>
    </div>
  );
};

export default App;
