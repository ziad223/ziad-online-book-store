import React, { useState } from 'react';
import './slider.css';
import firstBook from '../../images/book1.png';
import secondBook from '../../images/book2.png';
import thirdBook from '../../images/book3.png';
import {BsChevronDoubleLeft , BsChevronDoubleRight} from 'react-icons/bs'

const Slider = () => {
    const [slideIndex , setSlideIndex] = useState(0);

    const handleClick = (direction) =>{
     if(direction === 'left'){
        setSlideIndex(slideIndex === 0 ? 2 :  slideIndex - 1);
     }else{
        setSlideIndex(slideIndex === 2 ? 0 :  slideIndex + 1);

     }
    }

  return (
    <div className='slider-container'>
  <BsChevronDoubleRight className='arrow-right' onClick={() =>handleClick('right')}/>  
     <div className="slider-wrapper" style={{transform : `translateX(${slideIndex * -100}vw)`}}>

        <div className="slide first-slide" >

            <div className="slide-img-wrapper" >
                <img src={firstBook} alt="" />
            </div>

            <div className="slide-info-wrapper">
                <h1 className="slide-info-title">Book Store</h1>
                <p className="slide-info-desc">
                    Its not just reading. Its Living the adventure.
                </p>
            </div>
        </div>

        <div className="slide second-slide">

            <div className="slide-img-wrapper">
                <img src={secondBook} alt="" />
            </div>

            <div className="slide-info-wrapper">
                <h1 className="slide-info-title">The Books For Everyone</h1>
                <p className="slide-info-desc">
                    you can read at home or at the bookstore.
                </p>
            </div>
        </div>

        <div className="slide third-slide">

<div className="slide-img-wrapper">
    <img src={thirdBook} alt="" />
</div>

<div className="slide-info-wrapper">
    <h1 className="slide-info-title">Check Out The New Titles</h1>
    <p className="slide-info-desc">
        We Send you the book you want at home.
    </p>
</div>
        </div>

     </div>
<BsChevronDoubleLeft className='arrow-left' onClick={() =>handleClick('left')}/>
     
    </div>
  )
}

export default Slider