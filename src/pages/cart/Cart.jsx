import { useContext } from 'react';
import {cartInfo} from '../../data/cart';
import CartItem from './CartItem';
import OrderSummary from './OrderSummary';
import "./cart.css";
import { CartContext } from '../../context/CartContext';

const Cart = () => {
  
   const {cartItems , addToCart , removeItem } = useContext(CartContext);
   
  const totalPrice = cartItems.reduce((acc , cur) => acc + cur.price * cur.quantity , 0);

  return (
    <div className="cart">
      <h1 className="cart-title">Your Shopping Cart</h1>
      <div className="cart-wrapper">
        <div className="cart-items">
          <CartItem 
           cartItems = {cartItems}
            removeItem = {removeItem}
             addToCart = {addToCart} 
             />
        </div>
        <OrderSummary totalPrice = {totalPrice}/>
      </div>
    </div>
  );
};

export default Cart;