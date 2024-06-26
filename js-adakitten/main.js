"use strict";
/* Agregar el código del li desde HTMl 
Repetir este proceso por cada gatito */
const description1 = `Porte elegante, su patrón de color tan característico y sus ojos
de un azul intenso, pero su historia se remonta a Asía al menos
hace 500 años, donde tuvo su origen muy posiblemente.`
const description2 = `Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
hasta con pinta de alienígena han llegado a definir a esta raza
gatuna que se caracteriza por la «ausencia» de pelo.`
const description3 = `Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
bella mirada se ha convertido en una de sus señas de identidad.
Sus ojos son grandes y las orejas resultan largas y en punta.`

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
  ${description1}          
  </p>
</article>
</li>;`

const kittenTwo = `<li class="card">
  <img
  class="card_img"
  src="https://dev.adalab.es/sphynx-gato.webp"
  alt="sphynx-cat"
  />
  <h3 class="card_title">Fiona</h3>
  <h4 class="card_race">Sphynx</h4>
  <p class="card_description">
  ${description2}          
  </p>
  </li>`

  const kittenThree = `<li class="card">
  <img
    class="card_img"
    src="https://dev.adalab.es/maine-coon-cat.webp"
    alt="maine-coon-cat"
  />
  <h3 class="card_title">Cielo</h3>
  <h4 class="card_race">Maine Coon</h4>
  <p class="card_description js-description3">
  ${description3}
  </p>
</li>`

document.querySelector(".js-list")
js-list.innerHTML 

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
  console.log(descrSearchText)
    if( description1.includes(descrSearchText) ) {
    
    }
    
    if( description2.includes(descrSearchText) ) {
    
    }
    
    if( description3.includes(descrSearchText) ) {
    kitty3.innerHTML
    }
})




