import PRODUCTS from "../../data/dummy-data";

// initial state
const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter((product) => product.ownerId === "u1"),
};

// reducer function
const productReducer = (state = initialState, action) => {
  return state;
};

export default productReducer;
