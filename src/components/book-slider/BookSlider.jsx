import React, { useContext, useState } from 'react';
import './book-slider.css';
import Raiting from '../slider/Raiting';
import Modal from '../modal/Modal';
import { CartContext } from '../../context/CartContext';


const BookSlider = ({data}) => {

  const {addToCart} = useContext(CartContext)

    const [bookSlideIndex , setBookSlideIndex] = useState(0);
    const [openModal , setOpenModal] = useState(false);
    const [bookData , setBookData] = useState(null);

    const handleModal = (item) =>{
      setOpenModal(true);
      setBookData(item);

    }

    const handleClick = (direction) =>{
      if(direction === 'left'){
        setBookSlideIndex(bookSlideIndex - 1);
      }else{
        setBookSlideIndex(bookSlideIndex + 1);
      }
    }


  return (
    <div className='book-slider-container'>
        {bookSlideIndex > 0 && <i onClick={() => handleClick("left")} class="fa-solid fa-chevron-left book-slider-arrow-left"></i>        }
 <div className="book-slider-wrapper" style={{transform : `translateX(${bookSlideIndex * -340}px)`}}>
    {data.map(item =>{
        return(
        <div key={item.id} className="book-slide-item">
            <img src={`/books/${item.image}`} alt={item.title} className='book-slide-item-img' />
            <h2 style={{fontSize : '20px', margin : '10px'}}>{item.title}</h2>
            <h2 className="book-slide-item-title"></h2>
            <Raiting rating = {item.rating} reviews = {item.reviews}/>
            <div className="book-slide-item-price">${item.price}</div>
            <div className="book-slider-icons-wrapper">
           <div className="cion">
            <i onClick={() =>handleModal(item)} class="fa-solid fa-eye"></i>
            <i class="fa-solid fa-cart-plus" onClick={() =>addToCart({...item , quantity : 1})}></i>
           </div>
            </div>
        </div>
      )
    })}
 </div>
 {bookSlideIndex < data.length -4 &&
 <i onClick={() =>handleClick("right")} class="fa-solid fa-chevron-right book-slider-arrow-right"></i>
   
 }
  {openModal && <Modal bookData = {bookData} setOpenModal = {setOpenModal}/>}
    </div>
  )
}

export default BookSlider