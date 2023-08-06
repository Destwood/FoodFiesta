// CartItem.jsx
import React from "react";
import style from "./CartItem.module.scss";

function CartItem({ item }) {
  return (
    <div className={style.cartItem}>
      <img className={style.img} src={item.img} alt={item.name} />
      <div className="">
        <p className={style.title}>{item.name}</p>
        <p className={style.desc}>{item.desc}</p>
      </div>
      <p className={style.price}>{item.price}</p>
    </div>
  );
}

export default CartItem;
