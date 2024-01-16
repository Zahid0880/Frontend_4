// Breadcrum.jsx
import React from "react";
import './Breadcrum.css';
import arrow_icon from '../Assets/arrow_icon.svg';

const Breadcrum = ( props) => {
 const{product}=props;
  return (
    <div className="breadcrum">
      Home <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />
      {product.category && <span>{product.category}</span>} <img src={arrow_icon} alt="" />
      {product.name && <span>{product.name}</span>}
    </div>
  );
}

export default Breadcrum;
