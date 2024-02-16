import{r,l as a,b as c}from"./utils-DIGX36Wo.js";import{E as n}from"./ExternalServices-Dv5AZ21x.js";function l(e){const t=e._links.self.href,i=t.indexOf("v2")+3,s=t.indexOf("?");return`<li class="product-card">
    <a href="/recipe_page/index.html?recipe=${t.substring(i,s)}">
      <img src="${e.recipe.image}" alt="Image of ${e.recipe.label}">
      <h2 class="card__name">${e.recipe.label}</h2>
      <h3 class="card__brand" >Cuisine Type:${e.recipe.cuisineType}</h3>
      <p class="product-card__cal"> Calories: ${e.recipe.calories.toFixed(2)}</p>
    </a>
  </li>`}class o{constructor(t,i,s){this.category=t,this.dataSource=i,this.listElement=s}async init(){const t=await this.dataSource.getData(this.category);document.querySelector(".title").innerHTML=`: ${d(this.category)}`,this.renderList(t.hits)}renderList(t){r(l,this.listElement,t)}}function d(e){return e.slice(0,1).toUpperCase()+e.slice(1)}a();const p=c("mealType"),m=new n,h=document.querySelector(".product-list"),u=new o(p,m,h);u.init();
