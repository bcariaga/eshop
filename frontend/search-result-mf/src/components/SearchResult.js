import React from 'react';

const SearchResult = ({items, categories, onClickItem: handleClickItem}) => {
  return (
    <div>
      <div
        style={{
          margin: '10px',
          padding: '10px',
          textAlign: 'center',
          backgroundColor: 'greenyellow',
        }}
      >
        <h1>Search results:</h1>

        {
          categories &&
                  categories.map((c, i) =>
                    (<span key={`category-${i}`}>{c}</span>))}
        {
          items &&
                  items.map((item, i) =>
                    (<div key={`item-${i}`}>
                      <p >{item.title}</p>
                      <button onClick={() => handleClickItem(item.id)}>
                      ver mas
                      </button>
                    </div>))
        }
      </div>
    </div>
  );
};

export default SearchResult;
