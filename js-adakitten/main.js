"use strict";
/* Agregar el código del li desde HTMl 
Repetir este proceso por cada gatito */
/*const description1 = `Porte elegante, su patrón de color tan característico y sus ojos
de un azul intenso, pero su historia se remonta a Asía al menos
hace 500 años, donde tuvo su origen muy posiblemente.`
const description2 = `Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
hasta con pinta de alienígena han llegado a definir a esta raza
gatuna que se caracteriza por la «ausencia» de pelo.`
const description3 = `Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
bella mirada se ha convertido en una de sus señas de identidad.
Sus ojos son grandes y las orejas resultan largas y en punta.`

const kittenOne = `<li class="card card1">
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

const kittenTwo = `<li class="card card2">
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

const kittenThree = `<li class="card card3">
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
*/

const kittys = document.querySelector(".js-list");

const kittenData_1 = {
  image: 'https://dev.adalab.es/gato-siames.webp',
  name: 'Anastacio',
  desc: 'Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.',
  race: 'Siamés',
 };

 const kittenData_2 = {
  image: 'https://dev.adalab.es/sphynx-gato.webp',
  name: 'Fiona',
  desc: 'Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.',
  race: 'Sphynx',
 };

 const kittenData_3 = {
  image: 'https://dev.adalab.es/maine-coon-cat.webp',
  name: 'Fiona',
  desc: 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.',
  race: 'Maine',
};


function renderKitten(data){

  return  `<li class="card card1">
<article>
<img
class="card_img"
src= ${data.image}
alt="gatito"
/>
<h3 class="card_title">${data.name}</h3>
<h4 class="card_race">${data.race}</h4>
<p class="card_description">
${data.desc}         
</p>
</article>
</li>;`
 }


const kittenDataList = [kittenData_1, kittenData_2, kittenData_3];
function renderKittenList() {
  for (const kitty of kittenDataList) {
    kittys.innerHTML += renderKitten(kitty)
  }
}
renderKittenList();
/* kittys.innerHTML = renderKitten1() + renderKitten2() + renderKitten3(); */



/*
1. Recoger los datos cuando la usuaria haga click en el botón  (descripción)
2. Si la descripción coincide con la descripción del gato 1, mostrar gato 1 (igual con gato 2 y gato 3)
*/

const input_search_desc = document.querySelector('.js_in_search_desc');
const button1 = document.querySelector('.js-button-search');
const kitty1 = document.querySelector('.js-description1');
const kitty2 = document.querySelector('.js-description2');
const kitty3 = document.querySelector('.js-description3');

button1.addEventListener("click", (event) => {
  event.preventDefault();
  const descrSearchText = input_search_desc.value;
  console.log(descrSearchText)

  const card1 = document.querySelector('.card1');
  const card2 = document.querySelector('.card2');
  const card3 = document.querySelector('.card3');

    if(description1.includes(descrSearchText) ) {
      card2.classList.add('collapsed');
      card3.classList.add('collapsed');
    }
    if(description2.includes(descrSearchText) ) {
      card1.classList.add('collapsed');
      card3.classList.add('collapsed');
    }
    if(description3.includes(descrSearchText) ) {
      card1.classList.add('collapsed');
      card2.classList.add('collapsed');
    }
})

/*
1. Cuando la usuaria hace click en el botón de +
2. Si el formulario está escondido, lo muestro 
3. Si el formulario está mostrado, lo escondo.
*/

const button = document.querySelector(".js-btn-add");
const form = document.querySelector(".js-form");

function showNewCatForm(){
  form.classList.remove('collapsed');
}
function hideNewCatForm(){
  form.classList.add('collapsed');
}

/*Funcion manejadora*/


function handleClickNewCatForm(event){
  event.preventDefault();
  if (form.classList.contains('collapsed')){
    showNewCatForm();
  } else {
hideNewCatForm();
  }
}

button.addEventListener('click', handleClickNewCatForm);

/*
1. Crear una nueva función 
2. Modificar el ejercicio anterior
3. Recoger los datos que nos da el botón buscar 
*/

/*const buttonSearch = document.querySelector(".js-btn-add")
  buttonSearch.addEventListener("click", filterKitten);

  /* function filterKitten(event) 
    const descrSearchText = (event) => {
      event.preventDefault();
      if(description1.includes(descrSearchText) ) {
        kittys.innerHTML += kittenOne;
      
      }
      if(description2.includes(descrSearchText) ) {
        kittys.innerHTML += kittenTwo;
      
      }
      if(description3.includes(descrSearchText) ) {
        kittys.innerHTML += kittenThree;
       
      }
    }
   */

     /*Pasos en humano
    
     1. Cuando el usuario escriba en el buscador
     2. Recoger la info cuando el usuario haga click
     3. Mostras el gato que coincide con la descripción

  */

     