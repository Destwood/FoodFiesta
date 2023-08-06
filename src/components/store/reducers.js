// store/reducers.js
import img from "../../assets/pizza.jpg";
import drink from "../../assets/drink.png";
const defaultState = {
  data: {
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
    drinks: [
      {
        name: "Cola",
        desc: "Classic cola drink.",
        price: "2.99",
        img: drink,
      },
      {
        name: "Lemonade",
        desc: "Refreshing lemonade.",
        price: "3.49",
        img: drink,
      },
      {
        name: "Iced Tea",
        desc: "Cold and sweet iced tea.",
        price: "2.99",
        img: drink,
      },
      {
        name: "Orange Juice",
        desc: "Freshly squeezed orange juice.",
        price: "3.99",
        img: drink,
      },
      {
        name: "Strawberry Smoothie",
        desc: "Delicious strawberry smoothie.",
        price: "4.49",
        img: drink,
      },
      {
        name: "Mango Lassi",
        desc: "Indian yogurt-based mango drink.",
        price: "3.99",
        img: drink,
      },
    ],
  },
  cart: {
    pizza: [],
    drinks: [],
  },
  selectedType: "pizza",
  showModal: false,
};
const SET_SELECTED_TYPE = "SET_SELECTED_TYPE";
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const MODAL_STATE = "MODAL_STATE";
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_SELECTED_TYPE:
      return { ...state, selectedType: action.payload };
    case ADD_TO_CART:
      const { selectedType, product } = action.payload;
      return {
        ...state,
        cart: {
          ...state.cart,
          [selectedType]: [...state.cart[selectedType], product],
        },
      };

    case REMOVE_FROM_CART:
      console.log("removing something...");
      // Логика удаления товара из корзины
      // (state.cart.pizza или state.cart.drink, в зависимости от выбранного типа)
      return {};
    case MODAL_STATE:
      return { ...state, showModal: action.payload };
    default:
      return state;
  }
};
export default reducer;
