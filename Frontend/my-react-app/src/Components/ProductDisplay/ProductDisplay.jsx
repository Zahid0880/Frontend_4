import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';

const ProductDisplay = ({ product }) => {
  const { addToCard } = useContext(ShopContext);

  if (!product) {
    // Handle the case when product is undefined
    return null;
  }

  return (
    <div className='productdisplay'>
      <div className='productdisplay-left'>
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
      </div>
      <div className='productdisplay-img'>
        <img className='productdisplay-main-img' src={product.image} alt="" />
      </div>
      <div className='productdisplay-right'>
        <h1>{product.name}</h1>
        <div className='productdisplay-right-star'>
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p> (122) </p>
        </div>
        <div className='productdisplay-right-prices'>
          <div className='productdisplay-right-prices'>$ {product.old_price} </div>
          <div className='productdisplay-right-prices'>$ {product.new_price} </div>
        </div>
        <div className='productdisplay-right-description'>
          this is a nice production
        </div>
        <div className='productdisplay-right-size'>
          <h1>Selection Size </h1>
          <div className='productdisplay-right-size'>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={() => { addToCard(product.id) }}>ADD TO CARD</button>
        <p className='productdisplay-right-category'><span>Category :</span> women t-short</p>
        <p className='productdisplay-right-category'><span>Tags :</span> modern</p>
      </div>
    </div>
  );
}

export default ProductDisplay;
