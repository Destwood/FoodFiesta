import React from "react";
import style from "./ProductList.module.scss";
import ProductItem from "./ProductItem/ProductItem";
import { useSelector } from "react-redux";

function ProductList() {
  const selectedType = useSelector((state) => state.selectedType);
  const data = useSelector((state) => state.data[selectedType]);
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        {data.map((item) => (
          <ProductItem
            key={item.name}
            selectedType={selectedType}
            name={item.name}
            desc={item.desc}
            price={item.price}
            img={item.img}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
