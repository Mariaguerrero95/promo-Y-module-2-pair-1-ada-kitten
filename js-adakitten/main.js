"use strict";
/* Agregar el código del li desde HTMl 
Repetir este proceso por cada gatito */
const kittenOne = `<li class="card">
<article>
  <img
    class="card_img"
    src="https://dev.adalab.es/gato-siames.webp"
    alt="gatito"
  />
  <h3 class="card_title">Anastacio</h3>
  <h4 class="card_race">Siamés</h4>
  <p class="card_description">
            Porte elegante, su patrón de color tan característico y sus ojos
            de un azul intenso, pero su historia se remonta a Asía al menos
            hace 500 años, donde tuvo su origen muy posiblemente.
  </p>
</article>
</li>;`

/* 
  1.Mostrar el formulario por defecto
  2.Cuando usuario haga click en + se despliega el formulario
*/

const button = document.querySelector(".js-btn-add");
button.removeEventListener("click",(event) => {
  event.
console.log("probando")
})

/*
1. Recoger los datos cuando la usuaria haga click en el botón  (descripción)
2. Si la descripción coincide con la descripción del gato 1, mostrar gato 1 (igual con gato 2 y gato 3)

*/

const input_search_desc = document.querySelector('.js_in_search_desc');
const button1 = document.querySelector('.js-button-search');
const kitty3 = document.querySelector('.js-description3');

button1.addEventListener("click", (event) => {
  event.preventDefault();
  const descrSearchText = input_search_desc.value;
  if (kitty3.innerHTML.includes(descrSearchText) ){
    console.log("gatito")
  }
})


    if( kittenDesc1.includes(descrSearchText) ) {
    //Completa el código
    }
    
    if( kittenDesc2.includes(descrSearchText) ) {
    
    }
    
    if( kittenDesc3.includes(descrSearchText) ) {
    kitty3.innerHTML
    }


