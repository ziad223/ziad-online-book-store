import React from 'react'

const CartItem = ({ addToCart , removeItem , cartItems}) => {
  return (
 <>
 { cartItems.length > 0 ? cartItems.map(item =>{
  return(
    <div  className="cart-item">
    <img
         src={`/books/${item.image}`}
      alt={item.title}
      className="cart-item-img"
    />
    <div className="cart-item-info">
      <div>
        <div className="cart-item-book-title">
          <b>Title: </b>
          {item.title}
        </div>
        <div className="cart-item-author">
          <b>Author: </b>
          {item.author}
        </div>
      </div>
      <div>
        <div className="cart-item-quantity">
          <button
            className="fa-solid fa-plus"
            onClick={() =>addToCart({...item,  quantity: item.quantity + 1})}
          ></button>
          <b>{item.quantity}</b>
          <button
            disabled={item.quantity === 1}
             className="fa-solid fa-minus "
            onClick={() =>addToCart({...item,  quantity: item.quantity - 1})}

          ></button>
        </div>
        <div className="cart-item-price">
        Price : ${(item.quantity * item.price).toFixed(2)}
        </div>
        <i className="fa-solid fa-trash" onClick={() =>removeItem(item.id)}></i>
      </div>
    </div>
  </div>
  )
 }) : <h2 className='no-carts'>There is no Cart here.</h2>}
 </>
  )
}

export default CartItem