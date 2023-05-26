import React, { useContext, useState } from 'react';
import './modal.css';
import Raiting from '../slider/Raiting';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const Modal = ({bookData , setOpenModal }) => {
  const {addToCart} = useContext(CartContext);
  const [qty , setQty] = useState(1)
  return (
 
    <div onClick={() => setOpenModal(false)} className="modal-container">
    <div onClick={(e) => e.stopPropagation()} id="modal-content">
      <i  onClick={() => setOpenModal(false)}  className="fa-solid fa-xmark modal-icon" ></i>
      <div className="modal-content-img">
        <img src={`/books/${bookData.image}`} alt={bookData.title} />
      </div>r
      <div className="modal-content-info">
        <h5 className="modal-content-info-title">{bookData.title}</h5>
        <div className="modal-content-info-stock">
          <b>Status:</b> {bookData.inStock ? "in stock" : "not in stock"}
        </div>
        <Raiting rating={bookData.rating} reviews={bookData.reviews} />
        <div className="modal-content-info-author">
          <b> Author: </b>
          {bookData.author}
        </div>
        <div className="model-contemt-info-price">
            <b> Price : ${bookData.price} </b>
        </div>
        <div className="modal-add-to-cart">
            <input type="number" min="1" max="100"
             className='modal-add-to-cart-input'
             value={qty}
             onChange={(e) =>setQty(e.target.value)}
              />
            <button 
            onClick={() =>addToCart({...bookData , quantity :qty})}
            className="modal-add-to-cart-btn">
              <i class="fa-solid fa-cart-plus">
                </i>Add To Cart</button>
        </div>
        <Link to={`/book/${bookData.id}`}  className="modal-content-info-link cart-i">   See More Details </Link >
        </div>
        </div>
        </div>
  )
}

export default Modal

