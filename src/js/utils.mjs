export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function getParams(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const parameter = urlParams.get(param);
  return parameter;

}

export function renderListWithTemplate(templateFn, parentElement, list, position="afterbegin", clear=false){

  const htmlStrings = list.map(templateFn);
    
    if (clear) {
      parentElement.innerHTML = "";
    }
    parentElement.insertAdjacentHTML(position, htmlStrings.join(""));
}


export function alertMessage(message, scroll = true, duration = 4000) {
  const alert = document.createElement("div");
  alert.classList.add("alert");
  alert.innerHTML = `<p>${message}</p><span>❌</span>`;

  alert.style.display = "flex";
  alert.style.background = "navy";
  alert.style.color = "white";
  alert.style.fontWeight = "bold";
  alert.style.margin = "1rem";
  alert.style.justifyContent = "space-between";

  alert.addEventListener("click", function (e) {
    if (e.target.tagName == "SPAN") {
      main.removeChild(this);
    }
  });
  const main = document.querySelector("main");
  main.prepend(alert);
  // make sure they see the alert by scrolling to the top of the window
  //we may not always want to do this...so default to scroll=true, but allow it to be passed in and overridden.
  if (scroll) window.scrollTo(0, 0);

  // left this here to show how you could remove the alert automatically after a certain amount of time.
  // setTimeout(function () {
  //   main.removeChild(alert);
  // }, duration);
}

export function removeAllAlerts() {
  const alerts = document.querySelectorAll(".alert");
  alerts.forEach((alert) => document.querySelector("main").removeChild(alert));
}

export function totalQuantity (){      
  const array = getLocalStorage("so-cart");
  const cartAmount = document.querySelector(".cart-quantity");
  if (array.length>0) {
      cartAmount.textContent = array.length; 
      cartAmount.style.display = "inline-block";
  } else {
      cartAmount.style.display = "none";
  }

}


export function renderWithTemplate(templateFn, parentElement,  position="afterbegin", clear=false){
    if (clear) {
      parentElement.innerHTML = "";
    }

    parentElement.insertAdjacentHTML(position,templateFn);
    
}

export async function loadTemplate(path) {
  const res = await fetch(path) 
  const template = await res.text();
  return template;
}

export async function loadHeaderFooter() {
  const headerTemplate = await loadTemplate("/partials/header.html");
  const headerElement = document.querySelector("#main-header");
  const footerTemplate = await loadTemplate("/partials/footer.html");
  const footerElement = document.querySelector("#main-footer");

  renderWithTemplate(headerTemplate, headerElement)
  renderWithTemplate(footerTemplate, footerElement);
  totalQuantity()
  
}

export function bmi(mass, height){

  return mass/(height**2);
}


export function errorForm(position="afterbegin"){

// Selecione o formulário pelo seu ID (substitua "myForm" pelo ID real do seu formulário)
const form = document.forms.checkout;

// Pegue todos os elementos input do formulário
const inputElements = form.querySelectorAll("input");

// Para cada elemento input, associe o evento "input" e adicione um elemento <span> para mostrar mensagens de erro
inputElements.forEach(inputElement => {
  // Crie um elemento <span> para mostrar mensagens de erro
  const errorSpan = document.createElement("span");
  errorSpan.className = "error-active"; // Adicione uma classe para estilização
  inputElement.insertAdjacentHTML(position, errorSpan); // Insira o elemento <span> após o input

  inputElement.addEventListener("input", () => {
    // Aqui você pode adicionar sua lógica de validação para cada input
    if (inputElement.validity.valid) {
      // Se o campo for válido, remova qualquer mensagem de erro
      errorSpan.textContent = ""; // Limpe o conteúdo do span
      errorSpan.classList.remove("active"); // Remova a classe "active" para esconder o span
    } else {
      // Se houver um erro, mostre a mensagem de erro apropriada
      errorSpan.textContent = "Preenchimento inválido"; // Defina a mensagem de erro
      errorSpan.classList.add("active"); // Adicione a classe "active" para mostrar o span
    }
  });
});

}


