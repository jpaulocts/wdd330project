import ShoppingCart from "./ShoppingCart.mjs";
import { getLocalStorage } from "./utils.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const fav = new ShoppingCart("so-cart", ".product-list");

fav.renderCartContents();
