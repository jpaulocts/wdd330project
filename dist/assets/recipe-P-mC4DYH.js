import{a as d,t as s,g as n,s as c,l as o,b as l}from"./utils-DIGX36Wo.js";import{E as p}from"./ExternalServices-Dv5AZ21x.js";function u(t,e){const i=m(t);return`<section class="product-detail"> <h3>Meal type: ${t.recipe.mealType}</h3>
    <h2 class="divider">${t.recipe.label}</h2>
    <img
      class="divider"
      src="${t.recipe.image}"
      alt="${t.recipe.label}"
    />
    <p class="product-dish__type"> Dish type: ${t.recipe.dishType}</p>
    <p class="product__calorie">${t.recipe.calories.toFixed(0)} kcal</p>
    <p class="product__cuisineType">Cuisine type: 
    ${t.recipe.cuisineType}
    </p>
    Ingredients:
    ${i}
    How to Make :
    <a href=${t.recipe.url} target="_blank"><span>${t.recipe.source}</span></a>
    <div class="product-detail__add">
      <button id="addToCart" data-id="${e}">⭐ Add to Favorites</button>
    </div></section>`}function m(t){const e=document.createElement("li");return t.recipe.ingredientLines.forEach(a=>{let r=document.createElement("li");r.innerHTML=a,e.append(r)}),e.innerHTML}class h{constructor(e,i){this.productId=e,this.product={},this.dataSource=i,this.productArray=[]}async init(){this.product=await this.dataSource.findProductById(this.productId),this.renderProductDetails("main"),document.getElementById("addToCart").addEventListener("click",this.addToCart.bind(this))}addToCart(){this.addProduct(this.product),d(`${this.product.NameWithoutBrand} added to cart!`),s()}addProduct(e){this.productArray=n("so-cart")||[];let i=this.productArray.findIndex(a=>a.Id===e.Id);i===-1?this.productArray.push({Id:e.Id,Name:e.Name,ColorName:e.ColorName,Brand:e.Brand,Colors:e.Colors,Discount:e.Discount,Images:e.Images,ListPrice:e.ListPrice,DescriptionHtmlSimple:e.DescriptionHtmlSimple,quantity:1}):this.productArray[i].quantity+=1,c("so-cart",this.productArray),s()}renderProductDetails(e){document.querySelector(e).insertAdjacentHTML("afterBegin",u(this.product,this.productId))}}o();const y=new p,g=l("recipe"),I=new h(g,y);I.init();
