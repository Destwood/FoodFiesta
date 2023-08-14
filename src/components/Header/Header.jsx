import React from "react";
import style from "./Header.module.scss";
import { useDispatch, useSelector } from "react-redux";

import cart from "./cart.svg";
import { modalState, setSelectedType } from "../store/actions";

function Header() {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);

  return (
    <div className={style.wrapper}>
      <div className={style.goodsContainer}>
        <div
          className={`${style.goodsOption} ${style.btn}`}
          onClick={() => {
            dispatch(setSelectedType("pizza"));
          }}
        >
          Pizzas
        </div>
        <div
          className={`${style.goodsOption} ${style.btn}`}
          onClick={() => {
            dispatch(setSelectedType("drinks"));
          }}
        >
          Drinks
        </div>
      </div>
      <div
        className={style.cart}
        onClick={() => {
          dispatch(modalState(true));
        }}
      >
        <img className={style} src={cart} alt="" />
        {cartState.drinks.length + cartState.pizza.length ? (
          <p className={style.counter}>
            {cartState.drinks.length + cartState.pizza.length}
          </p>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Header;
