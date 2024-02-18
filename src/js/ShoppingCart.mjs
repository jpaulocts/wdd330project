import { getLocalStorage, totalQuantity } from "./utils.mjs";
import { id } from "./ProductList.mjs";

function cartItemTemplate(item) {

  const idproduct = id(item);
  const newItem = `<li class="cart-card divider">
  <a href="/recipe_page/index.html?recipe=${idproduct}" class="cart-card__image">
    <img
      src="${item.recipe.image}"
      alt="${item.recipe.label}"
    />
  </a>
  <a href="/recipe_page/index.html?recipe=${idproduct}">
    <h2 class="card__name">${item.recipe.label}</h2>
  </a>
  <p class="cart-card__color">Meal Type:${item.recipe.mealType}</p>
  <p class="cart-card__quantity">Calories: ${item.recipe.calories.toFixed(0)} kcal</p>
  <p class="cart-card__price">${item.recipe.cuisineType} cuisine<span></span></p>
  <div class="product-detail__add">
      <button class="removeItem" data-id="${item.recipe.label}">Remove recipe</button>
    </div>
</li>`;

  return newItem;


}

// function to show the total in the cart.

 function sumPrice(list) {
  const prices = list.reduce((acumulator, element)=> parseFloat(acumulator) + parseFloat(element.ListPrice),0);
  const htmlElement = document.querySelector(".product-list");
  const card = document.querySelectorAll(".product-list li");
  if (card.length >0){
    /* const sum = document.createElement("span"); */
    const buttonCheck = document.createElement("button");
    buttonCheck.setAttribute("type", "button");
    buttonCheck.setAttribute("onclick", "window.location.href='/checkout/index.html';");
    buttonCheck.textContent = "Save plan";
   /*  sum.innerHTML = `Total: $${prices}`; */
    /* htmlElement.appendChild(sum); */
    htmlElement.appendChild(buttonCheck);
  } else {

    const message = document.createElement("span");
    message.textContent = "There is no favorite recipes here";
    htmlElement.appendChild(message);
  }

}

export default class ShoppingCart {
  constructor(key, parentSelector) {
    this.key = key;
    this.parentSelector = parentSelector;
  }
  renderCartContents() {
    const cartItems = getLocalStorage(this.key);
    const htmlItems = cartItems.map((item) => cartItemTemplate(item));
    document.querySelector(this.parentSelector).innerHTML = htmlItems.join("");  
    this.setupRemoveItemListeners(cartItems); 
    sumPrice(cartItems);
    totalQuantity();

   

  }

  setupRemoveItemListeners(cartItems) {
    const removeButtons = document.querySelectorAll(".removeItem");
    
    removeButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const itemId = event.currentTarget.dataset.id;
        // Remove the item from the array
        const updatedCartItems = cartItems.filter(item => item.recipe.label !== itemId);
        // Update the local storage and re-render the cart
        localStorage.setItem(this.key, JSON.stringify(updatedCartItems));
        this.renderCartContents();
        /* totalQuantity() */
      });
    });
  }

}