import{g as c,s as n,a as r,t as d,l as o,b as l}from"./utils-CWMTnRNg.js";import{E as p}from"./ExternalServices-Dv5AZ21x.js";function u(e,t){const i=h(e);return`<section class="product-detail"> <h3>Meal type: ${e.recipe.mealType}</h3>
    <h2 class="divider">${e.recipe.label}</h2>
    <img
      class="divider"
      src="${e.recipe.image}"
      alt="${e.recipe.label}"
    />
    <p class="product-dish__type"> Dish type: ${e.recipe.dishType}</p>
    <p class="product__calorie">${e.recipe.calories.toFixed(0)} kcal</p>
    <p class="product__cuisineType">Cuisine type: 
    ${e.recipe.cuisineType}
    </p>
    Ingredients:
    ${i}
    How to Make :
    <a href=${e.recipe.url} target="_blank"><span>${e.recipe.source}</span></a>
    <div class="product-detail__add">
      <button id="addToCart" data-id="${t}">⭐ Add to Favorites</button>
    </div></section>`}function h(e){const t=document.createElement("li");return e.recipe.ingredientLines.forEach(a=>{let s=document.createElement("li");s.innerHTML=a,t.append(s)}),t.innerHTML}class m{constructor(t,i){this.productId=t,this.product={},this.dataSource=i,this.productArray=[]}async init(){this.product=await this.dataSource.findProductById(this.productId),this.renderProductDetails("main"),document.getElementById("addToCart").addEventListener("click",this.addToCart.bind(this))}addToCart(){const t=c("so-cart")||[],i=this.product.recipe.label,a=document.querySelector(".cart-quantity");t.some(s=>s.recipe.label===i)?r(`${i} has already added to favorites recipes! Please, choose another one.`):(t.push(this.product),n("so-cart",t),r(`${i} added to favorites recipes!`),d(),a.classList.add("animating")),a.addEventListener("anmationend",function(){this.classList.remove("animating")})}renderProductDetails(t){document.querySelector(t).insertAdjacentHTML("afterBegin",u(this.product,this.productId))}}o();const g=new p,y=l("recipe"),$=new m(y,g);$.init();
