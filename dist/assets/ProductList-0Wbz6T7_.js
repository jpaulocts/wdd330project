import{r as l}from"./utils-BBpt8VOu.js";function c(e){return`<li class="product-card">
    <a href="/recipe_page/index.html?recipe=${d(e)}">
      <img src="${e.recipe.image}" alt="Image of ${e.recipe.label}">
      <h2 class="card__name">${e.recipe.label}</h2>
      <h3 class="card__brand" >Cuisine Type:${e.recipe.cuisineType}</h3>
      <p class="product-card__cal"> Calories: ${e.recipe.calories.toFixed(2)}</p>
    </a>
  </li>`}class u{constructor(t,s,i){this.category=t,this.dataSource=s,this.listElement=i}async init(){const t=await this.dataSource.getData(this.category);document.querySelector(".title").innerHTML=`: ${o(this.category)}`,this.renderList(t.hits)}renderList(t){l(c,this.listElement,t)}}function o(e){return e.slice(0,1).toUpperCase()+e.slice(1)}function d(e){const t=e._links.self.href,s=t.indexOf("v2")+3,i=t.indexOf("?");return t.substring(s,i)}function m(){let e,t,s,i,a,n,r;for(e=document.getElementById("myInput"),t=e.value.toUpperCase(),s=document.querySelector("ul"),i=s.getElementsByTagName("li"),n=0;n<i.length;n++)a=i[n].getElementsByTagName("h2")[0],r=a.textContent||a.innerText,r.toUpperCase().indexOf(t)>-1?i[n].style.display="":i[n].style.display="none"}export{u as P,d as i,m};
