import React, {createContext, useState, useContext} from 'react';
const CartContext = createContext();

export default  CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    return null;
}
