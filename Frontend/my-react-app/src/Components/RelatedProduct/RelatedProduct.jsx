import React from "react";
import './RelatedProduct.css';
import data_product from '../Assets/data';

const RelatedProduct = () => {
  return (
    <div className="relatedProduct">
      <h1>Related Products</h1>
      <hr />
      <div className="relatedProduct-item">
        {data_product.map((item, i) => (
          <div key={item.id} className="product-display">
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

export default RelatedProduct;
