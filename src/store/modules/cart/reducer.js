const initialState = [];

const cartProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      const { newProduct } = action;
      return [...state, newProduct];
    default:
      return state;
  }
};

export default cartProductsReducer;
