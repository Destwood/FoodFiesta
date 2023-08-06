import React, { useState, useEffect } from "react";
import style from "./Cart.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { modalState } from "../store/actions";

import CartItem from "./CartItem/CartItem";

function Cart() {
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);
  const isVisible = useSelector((state) => state.showModal);
  const cartState = useSelector((state) => state.cart);
  const data = useSelector((state) => state.cart);
  const items = [...data.pizza, ...data.drinks];
  useEffect(() => {
    if (cartState.drinks.length + cartState.pizza.length > 0) {
      setShowPopup(isVisible);
    } else {
      dispatch(modalState(false));
    }
  }, [isVisible]);

  const handleContentClick = (event) => {
    // Предотвращаем всплытие события клика к внешнему контейнеру wrapper
    event.stopPropagation();
  };

  return (
    <div
      className={style.wrapper}
      onClick={() => {
        dispatch(modalState(false));
      }}
      style={{ display: showPopup ? "flex" : "none" }}
    >
      <div className={style.content} onClick={handleContentClick}>
        <h3 className={style.title}>Your order:</h3>

        {items.map((item) => (
          <CartItem key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Cart;
