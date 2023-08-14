import React from "react";
import style from "./OpenCart.module.scss";
import { useDispatch, useSelector } from "react-redux";

import cart from "./cart.svg";
import { modalState, setSelectedType } from "../store/actions";

function OpenCart() {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);

  const cartCounter = cartState.drinks.length + cartState.pizza.length;

  return (
    <div
      className={`${style.openCart} ${cartCounter ? "" : style.notActive}`}
      onClick={() => {
        if (cartCounter) {
          dispatch(modalState(true));
        }
      }}
    >
      <img className={style.img} src={cart} alt="" />
      {cartCounter ? <p className={style.counter}>{cartCounter}</p> : <></>}
    </div>
  );
}

export default OpenCart;
