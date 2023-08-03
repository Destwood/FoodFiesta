import React from "react";
import style from "./ProductItem.module.scss";
import img from "./pizza.jpg";

function ProductItem({ img2, title, desc, price }) {
  const clickHandle = () => {
    console.log("click here");
  };
  return (
    <div className={style.wrapper}>
      <div className={style.imgContainer} onClick={clickHandle}>
        <img className={style.img} src={img} alt="" />
      </div>

      <div className={style.content}>
        <h4 className={style.title}>Cheese Pizza</h4>
        <p className={style.desc}>
          Get our classic Pepperoni pizza with your choice of sauce and crust.
        </p>
        <p className={style.price}>$16.35</p>
      </div>
    </div>
  );
}

export default ProductItem;
