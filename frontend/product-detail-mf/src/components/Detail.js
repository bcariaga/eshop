import React from 'react';
import {useProdutDetail} from '../hooks/useProductDetail';
const Detail = ({id}) => {
  const [detail] = useProdutDetail(id);
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
        <h1>Product Detail</h1>
        {id && <span>id: {id}</span>}
        {detail && <span>title: {detail.title}</span>}
      </div>
    </div>
  );
};

export default Detail;
