import React, { useState } from "react";
import "./App.css";
import img from "./assets/pizza.jpg";

import Hero from "./components/Hero/Hero";
import ProductList from "./components/ProductList/ProductList";
const data = {
  pizza: [
    {
      name: "Pepperoni Pizza",
      desc: "Classic pizza with pepperoni, tomato sauce, and mozzarella cheese.",
      price: "12.99",
      img: img,
    },
    {
      name: "Margherita Pizza",
      desc: "Traditional pizza with tomato sauce, fresh mozzarella, basil, and olive oil.",
      price: "10.49",
      img: img,
    },
    {
      name: "Vegetarian Pizza",
      desc: "Pizza loaded with a variety of fresh vegetables and mozzarella cheese.",
      price: "11.99",
      img: img,
    },
    {
      name: "Hawaiian Pizza",
      desc: "Pizza with ham, pineapple, tomato sauce, and mozzarella cheese.",
      price: "13.49",
      img: img,
    },
    {
      name: "Meat Lovers Pizza",
      desc: "Pizza topped with a combination of various meats, tomato sauce, and mozzarella cheese.",
      price: "14.99",
      img: img,
    },
    {
      name: "BBQ Chicken Pizza",
      desc: "Pizza with BBQ sauce, grilled chicken, red onions, and mozzarella cheese.",
      price: "12.99",
      img: img,
    },
    {
      name: "Mushroom Pizza",
      desc: "Pizza topped with a generous amount of mushrooms, tomato sauce, and mozzarella cheese.",
      price: "11.49",
      img: img,
    },
    {
      name: "Supreme Pizza",
      desc: "Deluxe pizza with a mix of vegetables, pepperoni, sausage, tomato sauce, and mozzarella cheese.",
      price: "15.99",
      img: img,
    },
    {
      name: "White Pizza",
      desc: "Pizza without tomato sauce, topped with ricotta, mozzarella, garlic, and herbs.",
      price: "12.49",
      img: img,
    },
  ],
  drink: [
    {
      name: "Cola",
      desc: "Classic cola drink.",
      price: "2.99",
      img: img,
    },
    {
      name: "Lemonade",
      desc: "Refreshing lemonade.",
      price: "3.49",
      img: img,
    },
    {
      name: "Iced Tea",
      desc: "Cold and sweet iced tea.",
      price: "2.99",
      img: img,
    },
    {
      name: "Orange Juice",
      desc: "Freshly squeezed orange juice.",
      price: "3.99",
      img: img,
    },
    {
      name: "Strawberry Smoothie",
      desc: "Delicious strawberry smoothie.",
      price: "4.49",
      img: img,
    },
    {
      name: "Mango Lassi",
      desc: "Indian yogurt-based mango drink.",
      price: "3.99",
      img: img,
    },
  ],
};

function App() {
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
  return (
    <div className="App">
      <Hero />
      <ProductList />
    </div>
  );
}

export default App;
