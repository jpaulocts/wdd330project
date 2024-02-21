import ExternalServices from "./ExternalServices.mjs";
import ProductList from "./ProductList.mjs";
import { loadHeaderFooter, getParams } from "./utils.mjs";
import { myFunction } from "./ProductList.mjs";

loadHeaderFooter();


const category = getParams("mealType");

const dataSource = new ExternalServices();
const element = document.querySelector(".product-list");
const listElements = new ProductList(category, dataSource, element);

listElements.init();

document.getElementById("myInput").addEventListener("keyup", function(event) {
    myFunction();
})
 