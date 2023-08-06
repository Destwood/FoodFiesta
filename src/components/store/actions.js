// store/actions.js

// selecting type of goods to add
export const setSelectedType = (selectedType) => {
  return {
    type: "SET_SELECTED_TYPE",
    payload: selectedType,
  };
};

// adding item to cart
export const addToCart = (selectedType, product) => {
  return {
    type: "ADD_TO_CART",
    payload: { selectedType, product },
  };
};

// remove item from cart
export const removeFromCart = (product) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: product,
  };
};

// modal window
export const modalState = (visible) => ({
  type: "MODAL_STATE",
  payload: visible,
});
