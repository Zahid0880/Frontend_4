import React from "react";
import './Offers.css'
import exclucive_image from '../Assets/exclusive_image.png'


function Offers() {
  return (
    <div className="offers" >
    <div className="offers-left">
    <h1>offers for  You</h1>
    <p>ONLY ON BEST SELLERS PRODUCTS</p>
    <button>Check Now </button>
     </div>
    
     <div className="offers-right">
     <img src={exclucive_image} alt="" />
     </div>
    </div>
  );
}

export default Offers;