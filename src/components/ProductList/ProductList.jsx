import React from "react";
import style from "./ProductList.module.scss";

import ProductItem from "./ProductItem/ProductItem";

function ProductList() {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </div>
  );
}

export default ProductList;
