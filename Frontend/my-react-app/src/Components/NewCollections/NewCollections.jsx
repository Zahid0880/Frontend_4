import React from "react";
import './NewCollections.css'; // Make sure the path to your CSS file is correct
import new_collection from '../Assets/new_collections';

function NewCollections() {
  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item) => (
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

export default NewCollections;
