import React from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { modalState } from "./components/store/actions";
import "./App.css";
import style from "./components/modal.module.scss";

import Hero from "./components/Hero/Hero";
import Cart from "./components/Cart/Cart";
import ProductList from "./components/ProductList/ProductList";
import Header from "./components/Header/Header";

// const [data, setData] = useState();
// let counter = 0;
// const fetchData = async () => {
//   if (counter === 0) {
//     const url = "https://pizza-and-desserts.p.rapidapi.com/pizzas";
//     const options = {
//       method: "GET",
//       headers: {
//         "X-RapidAPI-Key":
//           "568596038amsh448f317f7ed09c8p1918bdjsn8c7a59dbad08",
//         "X-RapidAPI-Host": "pizza-and-desserts.p.rapidapi.com",
//       },
//     };

//     try {
//       const response = await fetch(url, options);
//       const result = await response.json();
//       setData(result);
//     } catch (error) {
//       console.error(error);
//     }
//     console.log(data);
//     counter++;
//   }
// };
// fetchData();

function App() {
  const isVisible = useSelector((state) => state.showModal);
  const data = useSelector((state) => state.cart);
  const items = [...data.pizza, ...data.drinks];
  const dispatch = useDispatch();
  const price = items.reduce((totalPrice, item) => totalPrice + item.price, 0);
  if (isVisible) {
    document.querySelector("body").style.overflowY = "hidden";
  } else {
    document.querySelector("body").style.overflowY = "auto";
  }
  const closeModal = () => {
    dispatch(modalState(false));
  };
  return (
    <div className="App">
      <Modal
        isOpen={isVisible}
        className={style.modal}
        overlayClassName={style.overlay}
        onRequestClose={closeModal}
      >
        <div className={style.modalHeader}>Your order:</div>
        <div className={style.modalContent}>
          {items.map((item) => (
            <div key={item.name} className={style.cartItem}>
              <img className={style.img} src={item.img} alt={item.name} />
              <div className="">
                <p className={style.title}>{item.name}</p>
                <p className={style.desc}>{item.desc}</p>
              </div>
              <p className={style.price}>{item.price}</p>
            </div>
          ))}
        </div>
        <div className={style.modalFooter}>
          <button className={style.orderBtn}>Order: {price} $</button>
        </div>
      </Modal>
      {!isVisible && <Header />}

      {/* <Cart /> */}

      <Hero />
      <ProductList />
    </div>
  );
}

export default App;
