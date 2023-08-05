import React from "react";
import { useDispatch } from "react-redux";
import style from "./ProductItem.module.scss";
import { addToCart } from "../../store/actions";
function ProductItem({ selectedType, name, desc, price, img }) {
  const dispatch = useDispatch();
  const clickHandle = () => {
    console.log("click here");
    dispatch(addToCart(selectedType, { name, desc, price, img }));
  };
  return (
    <div className={style.wrapper}>
      <div className={style.imgContainer} onClick={clickHandle}>
        <img className={style.img} src={img} alt="" />
      </div>

      <div className={style.content}>
        <h4 className={style.title}>{name}</h4>
        <p className={style.desc}>{desc}</p>
        <p className={style.price}>${price}</p>
      </div>
    </div>
  );
}

export default ProductItem;
