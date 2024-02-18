import{c as r}from"./utils-CWMTnRNg.js";function a(e){return`<li class="product-card">
    <a href="/recipe_page/index.html?recipe=${n(e)}">
      <img src="${e.recipe.image}" alt="Image of ${e.recipe.label}">
      <h2 class="card__name">${e.recipe.label}</h2>
      <h3 class="card__brand" >Cuisine Type:${e.recipe.cuisineType}</h3>
      <p class="product-card__cal"> Calories: ${e.recipe.calories.toFixed(2)}</p>
    </a>
  </li>`}class d{constructor(i,t,s){this.category=i,this.dataSource=t,this.listElement=s}async init(){const i=await this.dataSource.getData(this.category);document.querySelector(".title").innerHTML=`: ${c(this.category)}`,this.renderList(i.hits)}renderList(i){r(a,this.listElement,i)}}function c(e){return e.slice(0,1).toUpperCase()+e.slice(1)}function n(e){const i=e._links.self.href,t=i.indexOf("v2")+3,s=i.indexOf("?");return i.substring(t,s)}export{d as P,n as i};
