import React from 'react';
import './navbar.css';
import { useRef } from 'react';
import { Link } from 'react-router-dom'
import {AiOutlineClose}from 'react-icons/ai';
import {FaBars} from 'react-icons/fa'
const Navabar = () => {
 const navRef = useRef();

 const shownav = () =>{
     navRef.current.classList.toggle('responsive-nav');
  }
  return (
    <header  className='top_nav'>
      <div className="container-nav">
        <Link to='/'><img src='assets/wee/logo.jpg' alt="logo" className='logo'/></Link><span className='span-nav'>Bridge Design</span>
        <nav ref={navRef}>
            <ul className='nav_unord'>
                <li onClick={shownav} ><Link to='/'> Home </Link></li>
                <li onClick={shownav} ><Link to='/about'>About us</Link></li>
                <li onClick={shownav} ><Link to='/sign'>Sign &amp; Banners</Link></li>
                <li onClick={shownav} ><Link to='/printing'>Printing &amp; Branding</Link></li>
                <li onClick={shownav} ><Link to='/wedding'>Wedding Decoration</Link></li>
                <li onClick={shownav} ><Link to='/promotion'>Promotion Materials</Link></li>
                <li onClick={shownav} ><Link to='/gift'>Gift Making</Link></li>
                <li onClick={shownav} ><Link to='/contact'>Contact us</Link></li>
            </ul>
            <button className='btn_nav btn_nav_close' onClick={shownav}>
              <AiOutlineClose/>
            </button>
        </nav>
          <button className='btn_nav' onClick={shownav}>
             <FaBars/>
          </button>
      </div>
    </header>
  )
}

export default Navabar