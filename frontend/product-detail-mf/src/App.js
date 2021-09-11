import React from "react";

const App = ({ id }) => {
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
        <h1>Product Detail</h1>
        {id && <span>id: {id}</span>}
      </div>
    </div>
  );
};

export default App;
