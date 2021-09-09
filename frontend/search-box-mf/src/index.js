// You can write your own logic here to determine the actual url
window.productDetailUrl = "http://localhost:3001";
window.searchResultUrl = "http://localhost:3002";

// Use dynamic import here to allow webpack to interface with module federation code
import("./bootstrap");
