import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link, NavLink } from 'react-router-dom';


function Navbar() {

const [menu,setmenu] = useState("shop")

  return (
    <div className="navbar">
     <div className='nav-logo'>
        <img src={logo} alt="" />
        <p>CLICK ONE SHOP</p>
     </div>
     <ul className='nav-menu'>
        <li onClick={()=> {setmenu("shop")}}> <Link style={{textDecoration :'none'}} to='/' >Shop</Link>{menu === "shop"?<hr/>:<></>} </li>
        <li onClick={()=> {setmenu("mens")}}> <Link style={{textDecoration :'none'}} to='/mens' >Men</Link> {menu === "mens"?<hr/>:<></>}</li>
        <li onClick={()=> {setmenu("womens")}}> <Link style={{textDecoration :'none'}} to='/womens' >Women</Link> {menu === "womens"?<hr/>:<></>}</li>
        <li onClick={()=> {setmenu("kids")}}><Link style={{textDecoration :'none'}} to='/Kids' >Kids</Link>{menu === "kids"?<hr/>:<></>} </li>
     </ul>
     <div className='nav-login-card' >
      <Link to='/login'><button>Login</button></Link> 
      <Link to='/card'><img src={cart_icon} alt="" /></Link>
      <Link to='/login'></Link>  <div className='nav-card-count'>0</div>
     </div>
    </div>
  );
}

export default Navbar;
