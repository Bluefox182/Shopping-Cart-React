import React from "react";
import { useGlobalContext } from "./context";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
const CartItem = ({ id, img, title, price, amount }) => {
  const { remove, increase, decrease, toggleAmount } = useGlobalContext();
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        {/* remove button */}
        <button className="remove-btn" onClick={() => remove(id)}>
          remove
        </button>
      </div>
      <div className="amount-div">
        {/* increase amount */}
        <button className="amount-btn" onClick={() => toggleAmount(id, "inc")}>
          <span className="amount-icon">
            <FiPlusCircle />
          </span>
        </button>
        {/* amount */}
        <p className="amount">{amount}</p>
        {/* decrease amount */}
        <button className="amount-btn" onClick={() => toggleAmount(id, "dec")}>
          <span className="amount-icon">
            <FiMinusCircle />
          </span>
        </button>
      </div>
    </article>
  );
};

export default CartItem;
