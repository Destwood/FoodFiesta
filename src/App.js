import React from "react";
import "./App.css";

import Hero from "./components/Hero/Hero";
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
  return (
    <div className="App">
      <Header />
      <Hero />
      <ProductList />
    </div>
  );
}

export default App;
