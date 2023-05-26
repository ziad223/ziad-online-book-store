import React from 'react';
import './services.css';    
import {BsArrowClockwise} from 'react-icons/bs';

const Services = () => {
  return (
    <div className='services'>
   <div className="service-item">
   <i className="fa fa-truck i" ></i>
   <b>Free Shipping</b>
   </div>
   <div className="service-item">
   <i className='fa fa-gift i'></i>
   <b>Gift Card</b>
   </div>
   <div className="service-item">
   <BsArrowClockwise className='i'/>
   <b>7 Days Returns</b>
   </div>
   <div className="service-item">
   <i className="fa-regular fa-paper-plane i" ></i>
   <b>Contact Us</b>
   </div>
    </div>
  )
}

export default Services