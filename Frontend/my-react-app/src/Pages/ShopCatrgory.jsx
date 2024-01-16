import React, { useContext } from "react";
import './CSS/ShopCatrgory.css'
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

const ShopCatrgory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-catrgory">
      <img className="shopcatrgory-banner" src={props.banner} alt="" />
      <div className="shopcatrgory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 37 products
        </p>
        <div className="shopcatrgory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcatrgory-products">
        {all_product.map((item) => {
          if (props.category === item.category) {
            return (
              <Item 
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          }
          return null; // Added to handle the case where the category doesn't match
        })}
      </div>
      <div className="shopcatrgory-loadmore">
        Explore More
      </div>
    </div>
  );
}

export default ShopCatrgory;
