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
  {
    name: 'Smart TV 50"',
    price: 2699.0,
    image:
      "https://a-static.mlcdn.com.br/618x463/smart-tv-50-crystal-4k-samsung-50au7700-wi-fi-bluetooth-hdr-alexa-built-in-3-hdmi-1-usb/magazineluiza/193441200/dcdbdf49e5bfb2e7259c948e72708a8a.jpg",
  },
  {
    name: 'Smart TV 32"',
    price: 1349.0,
    image:
      "https://a-static.mlcdn.com.br/618x463/smart-tv-32-hd-led-tcl-s615-va-60hz-android-wi-fi-e-bluetooth-google-assistente-2-hdmi/magazineluiza/230531900/a74f79c5e2ff63182a417c62f521a25a.jpg",
  },
  {
    name: "iPhone 12 Apple 64GB",
    price: 4679.0,
    image:
      "https://a-static.mlcdn.com.br/618x463/iphone-12-apple-64gb-product-red-tela-61-12mp-ios/magazineluiza/231147500/6dc84326e6ec9aa975aa2762a5651c18.jpg",
  },
  {
    name: "Motorola Moto G10 64GB",
    price: 4679.0,
    image:
      "https://a-static.mlcdn.com.br/618x463/smartphone-motorola-moto-g10-64gb-cinza-aurora-4g-4gb-ram-tela-65-cam-quadrupla-selfie-8mp/gmagazinexpress/c6a87ca4582e11ecb27d4201ac18503a/261fddc1a3799c01411e51df3a00b5bc.jpg",
  },
];

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productsReducer;
