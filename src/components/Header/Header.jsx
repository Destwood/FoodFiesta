import React from "react";
import style from "./Header.module.scss";
import { useDispatch, useSelector } from "react-redux";

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
    </div>
  );
}

export default Header;
