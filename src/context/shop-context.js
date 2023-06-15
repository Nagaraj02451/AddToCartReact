import { createContext,  useState } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  // console.log("thi is cart" ,cart);
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    // console.log("product" , PRODUCTS[i]);
    cart[i] = 0;
    // console.log("Cart items", cart[i]=0);
    // console.log("Cart", cart);
  }
  return cart;
  
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      // console.log("Item list" , item);
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item) );
        totalAmount += cartItems[item] * itemInfo.price;
        // console.log("Item Info",itemInfo);
        // console.log("cart Info",cartItems[item]);
        // console.log("Number Info",Number(item));
      }
    }
    return totalAmount;
  };


  const deleteone =(itemId)=>{
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  }

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
    deleteone,
    
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};



