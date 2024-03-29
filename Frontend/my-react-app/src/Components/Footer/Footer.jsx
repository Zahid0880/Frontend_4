
import React from "react";
import './Footer.css'
import footer_logo from '../Assets/logo.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'


function Footer() {
  return (
    <div className="footer" >
        <div className="footer-logo">
            <img src={footer_logo } alt="" />
            <p>CLICK SHOP</p>
        </div>
        <ul className="footer_links">
            <li>Company</li>
            <li>Product</li>
            <li>Office</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
        <div className="footer-icon-container">
        <img src={instagram_icon} alt="" /> 
        <img src={pintester_icon} alt="" /> 
        <img src={whatsapp_icon } alt="" />    
        </div>    
        </div>
        <div className="footer-copyright">
            <hr/>
        <p>Copyright @ 2024 - All Right REserved</p>    
        </div>
        </div>
  );
}
export default Footer;
