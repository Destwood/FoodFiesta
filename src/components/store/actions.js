// store/actions.js

// Функция-генератор действия для выбора типа продуктов для отображения
export const setSelectedType = (selectedType) => {
  return {
    type: "SET_SELECTED_TYPE", // Измените "SET_SELECTED_OPTION" на "SET_SELECTED_TYPE"
    payload: selectedType,
  };
};

// Функция-генератор действия для добавления товара в корзину
export const addToCart = (selectedType, product) => {
  return {
    type: "ADD_TO_CART",
    payload: { selectedType, product },
  };
};

// Функция-генератор действия для удаления товара из корзины
export const removeFromCart = (product) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: product,
  };
};
