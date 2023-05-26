import React, { useContext, useState } from 'react';
import './header.css';
import {BsBook , BsCart} from 'react-icons/bs';
import Navbar from './Navbar';
import {Link} from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const Header = () => {
  const [navMenu , setNavMenu] = useState(true)
  const {cartItemsLength} =  useContext(CartContext);

  const navbarToggle = () =>{
    setNavMenu(!navMenu);
  }
  return (
    <header className='header'>
      
         <div className="header-top">
         <Link to='login' style={{textDecoration : 'none'}}> <div className="header-top-link"><i class="fa-solid fa-user"></i> Login</div> </Link>
         <div className="header-top-text">Welcome To Ziad Online Book Store</div> 
            <div className="header-top-phone"><i class="fa-solid fa-phone"></i> 01288486337 </div>
            <div className="header-top-menu"> <i onClick={navbarToggle} className="fa-solid fa-bars"></i></div>

{!navMenu  &&(
  <div className='navbar-mobile'>
   <div className="navbar-links">
        <Link onClick={() =>setNavMenu(true)} className='link' to='/'>Home</Link>
        <Link onClick={() =>setNavMenu(true)} to='/athors' className="link">Athours</Link>
        <Link onClick={() =>setNavMenu(true)} to='/about' className="link">About Us</Link>
        <Link onClick={() =>setNavMenu(true)} to='/contact' className="link">Contact Us</Link>
        <Link onClick={() =>setNavMenu(true)} to='/register' className="link">Register</Link>
   </div>
  </div>
)
}

         </div>

         <div className="header-middle">
          <div className="header-middle-logo">Book<BsBook className='header-book-icon'/>Store</div>
          <div className="header-middle-search-box">
            <input className='header-search-input' type="search" placeholder='Search in book store...'  />
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <Link to='/cart' className="header-middle-cart-wrapper">

            {cartItemsLength > 0 &&<b className='cart-notification'>{cartItemsLength}</b>}
            <BsCart className='cart-i' />
          </Link>
         </div>

         <Navbar/>

    </header>
  )
}

export default Header
