const initialState = [
  {
    name: "Echo Dot",
    price: 279.0,
    image:
      "http://socialcompare.com/u/1810/amazon-echo-dot-3rd-gen_d7ea66f39796763026215c4c0f1ab094.jpg",
  },
  {
    name: "Kindle Paperwhite",
    price: 499.0,
    image:
      "https://n1.sdlcdn.com/imgs/a/n/y/kindlepaperwhiteprocessed2-e864a.jpg",
  },
];

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productsReducer;
