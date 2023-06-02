import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(true)
  const cartClass = inCart ? "" : "in-cart"

  function addToCart() {
    setInCart(!inCart)
  }

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCart}>{inCart? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
