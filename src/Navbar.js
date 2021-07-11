import React from "react";
import { useGlobalContext } from "./context";
import { FiShoppingBag } from "react-icons/fi";

const Navbar = () => {
  const { amount } = useGlobalContext();
  return (
    <nav>
      <div className="nav-center">
        <h3>MyCart</h3>
        <div className="nav-container">
          <span className="quote-icon">
            <FiShoppingBag />
          </span>
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
