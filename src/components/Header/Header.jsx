import React from "react";
import style from "./Header.module.scss";
import { useDispatch, useSelector } from "react-redux"; // Импортируем useSelector

import cart from "./cart.svg";
import { setSelectedType } from "../store/actions";

function Header() {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart); // Получаем состояние cart

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
      <div className="" onClick={() => console.log(cartState)}>
        {" "}
        {/* Выводим состояние cart при нажатии на кнопку */}
        <img className={style.cart} src={cart} alt="" />
      </div>
    </div>
  );
}

export default Header;
