
import React from "react";
import './CardItems.css'
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import remve_icon from '../Assets/cart_cross_icon.png'

const CardItems=()=> {
    const {all_product,cardItems,removeFromCard}=useContext(ShopContext)
  return (
    <div className="carditems" >
     <div className="carditems-format-main">
        <p> Product </p>
        <p> Title </p>
        <p> Price </p>
        <p> Quantity </p>
        <p> Total </p>
        <p> Remove </p>
     </div>
    <hr/>

    {all_product.map((e)=>{
  if(CardItems[e.id]>0) 
  {
 return 
 <div>
 <div className=" carditems-format" >
  <img src={e.image} alt=""  className="carticon-product-icon"/>
  <p> e.name</p>
  <p>e.price</p>

  <button className="cartitem-quantity" > {cardItems[e.id]} </button>
  <p>e.new_price*cardItems[e,id]</p>
  <img src={remve_icon} onClick={()=>{removeFromCard(e.id)}} alt="" />
 </div>
 <hr/>
</div>
  }
  return null;
})}

   <div className="carditems-down">
    <div className="carditems-total">
        <h1> Card Total</h1>
    </div>
    <div className="carditems-total-item">
        <p>subtotal</p>
        <p>${0}</p>
    </div>
    <hr/>
    <div className="carditems-total-item" >
        <p>Shipping fee</p>
        <p>free</p>
    </div>
    <hr/>
    <div className="carditems-total-item" >
        <p>Total</p>
        <p>${0}</p>
    </div>
   </div>
   <button>Process to check </button>
<div className="carditems-promocode">
    <input type=" " name="" placeholder="Proomo code"/>
    <button>Submitte</button>
</div>
    </div>
  );
}

export default CardItems;
