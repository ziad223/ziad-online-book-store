import React from 'react'
import Slider from '../../components/slider/Slider'
import Services from '../../components/services/Services'
import BookSlider from '../../components/book-slider/BookSlider'
import { books } from '../../data/books'

const HomePage = () => {
  return (
    <div className='home'>
      <Slider/>
      <Services/>
      <BookSlider data = {books}/>
    </div>
  )
}

export default HomePage