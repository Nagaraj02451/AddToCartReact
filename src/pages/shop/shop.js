import React from "react";
import { PRODUCTS } from "../../products";
// import { Contact } from "../contact";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  console.log(PRODUCTS);
  return (
    <div className="shop">
      <div className="shopTitle">
        <h3>Lenovo_Laptop_Models</h3>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <>
          <Product data={product} />
          </>
        ))}
      </div>
    </div>
  );
};
