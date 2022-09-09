import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom'
import {FaFacebookF , FaInstagram} from 'react-icons/fa';
import {BsLinkedin , BsArrowRight} from 'react-icons/bs';
const Footer = () => {
  return (
    
  <footer>
     <div className="footer_container">
             <ul className='permalinks'>
                <h4>Quick links</h4>
            <li><Link to='/'> Home</Link></li>
            <li><Link to='/about'>About us</Link></li>
            <li><Link to='/sign'>Sign &amp; Banners</Link></li>
            <li><Link to='/printing'>Printing &amp; Branding</Link></li>
            <li><Link to='/printing'>Wedding Decoration</Link></li>
            <li><Link to='/printing'>Promotion Materials</Link></li>
            <li><Link to='/printing'>Gift Making</Link></li>
            <li><Link to='/contact'>Contact us</Link></li>
      </ul>
      <div className="foot_loc">
         <h4>Location</h4>
              <p>KG 045,Rwanda kigali city</p>
              <p>Our social media</p>
            <div className="footer_social">
                <a href="#soci" target="_blank"><FaFacebookF/></a>
                <a href="#soci" target="_blank"><FaInstagram/></a>
                <a href="#soci" target="_blank"><BsLinkedin/></a>
            </div>
        </div>

      <div className="footer_sub">
        <h4>Keep in touch</h4>
        <div className="foot_in">
            <input type="text" placeholder='Enter your Email' className='footer_inp'
           /><div className='enter_right'><BsArrowRight/></div>
        </div>
           <p>Sign up to get our notification every day on gamil be with us</p>
           <div className="call">
               <h4>Call: +250 788774264</h4>
           </div>
      </div>
     
   </div>
   <div className="footer_right">
        <h4>All right reserved &reg;2022 </h4>
   </div>
         <hr className='hr1'/>
  </footer>
    
  )
}

export default Footer