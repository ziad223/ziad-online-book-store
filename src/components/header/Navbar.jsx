import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
     <ul className="navbar-links">
        <Link to='/' className="navbar-link">Home</Link>
        <Link to='/athors' className="navbar-link">Athours</Link>
        <Link to='/about' className="navbar-link">About Us</Link>
        <Link to='/contact' className="navbar-link">Contact Us</Link>
        <Link to='/register' className="navbar-link">Register</Link>
     </ul>
    </div>
  )
}

export default Navbar