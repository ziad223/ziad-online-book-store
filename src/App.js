import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Slider from './components/slider/Slider';
import Services from './components/services/Services';
import BookSlider from './components/book-slider/BookSlider';
import {books} from './data/books';
import Footer from './components/footer/Footer';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import About from '../src/pages/About/About';
import Authors from '../src/pages/author/Authors';
import Cart from '../src/pages/cart/Cart';
import Login from '../src/pages/forms/Login';
import Register from '../src/pages/forms/Register';
import Contact from '../src/pages/contact/Contact';
import Book from './pages/book/Book';


const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Header/>
      <Routes>
        <Route path='/' element = {<HomePage/>} />
        <Route path='/about' element = {<About/>} />
        <Route path='/cart' element = {<Cart/>} />
        <Route path='/athors' element = {<Authors/>} />
        <Route path='/login' element = {<Login/>} />
        <Route path='/register' element = {<Register/>} />
        <Route path='/contact' element = {<Contact/>} />
        <Route path='/book/:id' element = {<Book/>} />
      </Routes>
      <Footer/>
     </BrowserRouter>
    </div>
  )
}

export default App