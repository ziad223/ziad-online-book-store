import React, { useContext } from 'react';
import './header.css';
import {BsBook , BsCart} from 'react-icons/bs';
import Navbar from './Navbar';
import {Link} from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const Header = () => {
  const {cartItemsLength} =  useContext(CartContext);
  return (
    <header className='header'>
      
         <div className="header-top">

            <div className="header-top-menu"> <i className="fa-solid fa-bars"></i></div>
            <div className="header-top-phone"><i class="fa-solid fa-phone"></i> 01288486337 </div>
            <div className="header-top-text">Welcome To Ziad Online Book Store</div>
            <Link to='login' style={{textDecoration : 'none'}}> <div className="header-top-link"><i class="fa-solid fa-user"></i> Login</div> </Link>


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