import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <section>
       <div className="container header_container">
          <div className="header_desc">
             <h1>Bridge Design Ltd</h1>
             {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam enim cum, iure deserunt voluptatibus, molestias officiis aliquam, voluptatum atque architecto */}
             <p>Bridge Design is most popular company in designing , printing, and publishing <br />
             Work with us to promote your own company </p>
             <br />
            <Link to='/contact'><button className='btn btn-primary btn_hdi'>Contact us</button></Link>
          </div>

          <div className="header_ic">
            <img src='assets/land/landing.jpg' alt="main" className='img_h'/>
            <img src='assets/land/land2.jpg' alt="main" className='header_image2'/>
          </div>

       </div>
    </section>
  )
}

export default Header;