const initialState = [];

const cartProductsReducer = (state = initialState, action) => {
  const { newProduct } = action;
  switch (action.type) {
    case "ADD_PRODUCT":
      return [...state, newProduct];

    case "REMOVE_PRODUCT":
      return state.filter((product) => product !== newProduct);

    default:
      return state;
  }
};

export default cartProductsReducer;
