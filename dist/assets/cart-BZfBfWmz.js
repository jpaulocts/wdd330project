import{g as i,t as l,l as p}from"./utils-DuOzCFNK.js";import{i as d}from"./ProductList-DJshU_J7.js";function m(r){const e=d(r);return`<li class="cart-card divider">
  <a href="/recipe_page/index.html?recipe=${e}" class="cart-card__image">
    <img
      src="${r.recipe.image}"
      alt="${r.recipe.label}"
    />
  </a>
  <a href="/recipe_page/index.html?recipe=${e}">
    <h2 class="card__name">${r.recipe.label}</h2>
  </a>
  <p class="cart-card__color">Meal Type:${r.recipe.mealType}</p>
  <p class="cart-card__quantity">Calories: ${r.recipe.calories.toFixed(0)} kcal</p>
  <p class="cart-card__price">${r.recipe.cuisineType} cuisine<span></span></p>
  <div class="product-detail__add">
      <button class="removeItem" data-id="${r.recipe.label}">Remove recipe</button>
    </div>
</li>`}function u(r){r.reduce((t,a)=>parseFloat(t)+parseFloat(a.ListPrice),0);const e=document.querySelector(".product-list");if(document.querySelectorAll(".product-list li").length>0){const t=document.createElement("button");t.setAttribute("type","button"),t.setAttribute("onclick","window.location.href='/checkout/index.html';"),t.textContent="Save plan",e.appendChild(t)}else{const t=document.createElement("span");t.textContent="There is no favorite recipes here",e.appendChild(t)}}class h{constructor(e,c){this.key=e,this.parentSelector=c}renderCartContents(){const e=i(this.key),c=e.map(t=>m(t));document.querySelector(this.parentSelector).innerHTML=c.join(""),this.setupRemoveItemListeners(e),u(e),l()}setupRemoveItemListeners(e){document.querySelectorAll(".removeItem").forEach(t=>{t.addEventListener("click",a=>{const s=a.currentTarget.dataset.id,o=e.filter(n=>n.recipe.label!==s);localStorage.setItem(this.key,JSON.stringify(o)),this.renderCartContents()})})}}p();const g=new h("so-cart",".product-list");g.renderCartContents();
