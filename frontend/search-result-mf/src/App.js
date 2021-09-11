import React from "react";

const App = ({ search }) => {
  console.log({ mfSearch: search });
  return (
    <div>
      <div
        style={{
          margin: "10px",
          padding: "10px",
          textAlign: "center",
          backgroundColor: "greenyellow",
        }}
      >
        <h1>Search results</h1>
        {search && <span>Query: {search}</span>}
      </div>
    </div>
  );
};

export default App;
