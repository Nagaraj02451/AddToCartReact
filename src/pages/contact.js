import React, { useContext } from "react";
import { PRODUCTS } from "../products";
import { ShopContext } from "../context/shop-context";

const style = {
  width : 100
}
const styleone = {
  display : "flex"
}


export const Contact = () => {

  // const {cartItems} = useContext(ShopContext)


  return(
    <>
      <div>
       {
        PRODUCTS.map((data)=>(
          <ul style={styleone}>
            <li>{data.id}</li>
            <li>{data.productName}</li>
            <li>{data.price}</li>
            <img src={data.productImage} style = {style} alt="suyrya" />
          </ul>
        ))
       }
</div>
       {/* <span>{cartItems}</span> */}
      
    </>
  )
};


