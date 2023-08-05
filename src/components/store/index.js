// store/index.js
import { createStore } from "redux";
import reducer from "./reducers"; // Импортируем редуктор из другого файла
import { setSelectedType, addToCart, removeFromCart } from "./actions"; // Импортируем все действия из actions.js

const store = createStore(reducer);

// Экспортируем хранилище и действия, чтобы использовать их в компонентах
export default store;
export { setSelectedType, addToCart, removeFromCart };
