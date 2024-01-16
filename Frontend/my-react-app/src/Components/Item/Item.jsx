import React from "react";
import './Item.css';
import { Link } from "react-router-dom";


const Item = (props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
  <img onClick={window.scrollTo(0,0)} src={props.image} alt={props.name} />
</Link>

      
      <div className="item-details">
        <p className="item-name">{props.name}</p>
        <p className="item-price">
          <span className="new-price">${props.new_price}</span>
          {props.old_price && <span className="old-price">${props.old_price}</span>}
        </p>
      </div>
    </div>
  );
};

export default Item;
