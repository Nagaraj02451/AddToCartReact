import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

import "./navbar.css";

export const Navbar = (props) => {

  
  return (
    <div className="navbar">
      <div className="title">
      <Link to="/">LENOVO_LAPTOP'S</Link>
      </div>
      <div className="links"> 
        <Link to="/"> Shop </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/cart">
          <ShoppingCart  />
        </Link>
        

      </div>
    </div>
  );
};
