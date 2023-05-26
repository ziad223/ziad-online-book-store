import { createContext, useState } from "react";

export const CartContext = createContext();


const CartProvider = ({children}) =>{
    const [cartItems , setCartItems] = useState([]);

    const addToCart = (item)=>{
       const isExist = cartItems.find(cart => cart.id === item.id);

       if(isExist){
        setCartItems(cartItems.map((cartItem) => cartItem.id === item.id ? item : cartItem))
       }else{
        setCartItems((prev) => [...prev , item])
       }
    }

    const removeItem = (id) =>{
        const cart = cartItems.filter(item =>item.id !== id);
        setCartItems(cart)
    }
    return(
        <CartContext.Provider value={{ cartItems , addToCart , removeItem , cartItemsLength : cartItems.length}}>
            {children}
        </CartContext.Provider>
    )
}


export default CartProvider;