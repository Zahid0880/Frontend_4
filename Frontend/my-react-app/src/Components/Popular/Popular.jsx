// Popular.js
import React from "react";
import './Popular.css';
import data_product from '../Assets/data';

function Popular() {
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
            <p>New Price: ${item.new_price}</p>
            <p>Old Price: ${item.old_price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Popular;
