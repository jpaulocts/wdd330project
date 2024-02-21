import { getLocalStorage, setLocalStorage, alertMessage, removeAllAlerts, bmi } from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";


const services = new ExternalServices();

function formDataToJSON(formElement) {
  const formData = new FormData(formElement),
    convertedJSON = {};

  formData.forEach(function (value, key) {
    convertedJSON[key] = value;
  });

  return convertedJSON;
}

function packageItems(items) {
  const simplifiedItems = items.map((item) => {
    console.log(item);
    return {
      id: item.recipe.label,
      label: item.recipe.calories,
      type: item.recipe.mealType,
      dish: item.recipe.dishType,
    };
  });
  return simplifiedItems;
}



export default class CheckoutProcess {
    constructor(key, outputSelector) {
      this.key = key;
      this.outputSelector = outputSelector;
      this.list = [];
      this.itemTotal = 0;
      this.shipping = 0;
      this.tax = 0;
      this.orderTotal = 0;
    }
  
    init() {
      this.list = getLocalStorage(this.key);
      this.calculateItemSummary();
    }
  
    calculateItemSummary() {
      // calculate and display the total amount of the items in the cart, and the number of items.

      const itemsTotal = document.querySelector(this.outputSelector + " #num-items");
      const valueTotal = document.querySelector(this.outputSelector + " #cartTotal");

      itemsTotal.textContent= `${(this.list.length)} ${this.list.length>1 ? "recipes" : "recipe"}`;

      const priceList  = this.list.map((item) => item.recipe.calories);
      this.itemTotal = priceList.reduce((sum, item)=> sum + item);


      valueTotal.textContent = this.itemTotal.toFixed(0) + " kcal";


  
    }
  
    calculateOrdertotal() {
      // calculate the shipping and tax amounts. Then use them to along with the cart total to figure out the order total
      this.shipping = bmi(parseFloat(document.querySelector("#todayWeight").value), parseFloat(document.querySelector("#height").value));
      this.tax = bmi(parseFloat(document.querySelector("#intendedWeight").value), parseFloat(document.querySelector("#height").value));
      this.orderTotal = this.shipping - this.tax
     
      // display the totals.
      this.displayOrderTotals();
    }
  
    displayOrderTotals() {
      // once the totals are all calculated display them in the order summary page
      const bmiToday = document.querySelector(this.outputSelector +" #shipping");
      const bmiInteded = document.querySelector(this.outputSelector + " #tax");
      const rate = document.querySelector(this.outputSelector + " #orderTotal");

      bmiToday.innerText = this.shipping.toFixed(2);
      bmiInteded.innerText = this.tax.toFixed(2);
      rate.innerText = this.orderTotal.toFixed(2) + " Kg/m²";
    }

    async checkout() {
      const formElement = document.forms["checkout"];
  
      const json = formDataToJSON(formElement);
      // add totals, and item details
      json.orderDate = new Date();
      json.orderTotal = this.orderTotal;
      json.tax = this.tax;
      json.shipping = this.shipping;
      json.items = packageItems(this.list);
      console.log(json); 
    }

  }
