//JS MAIN
"use strict";

let gridFruitMain = document.querySelector('.grid-fruit-main');
let sectionGrid = document.querySelector('.section-grid');
let sectionProduct = document.querySelector('.section-product');

function createCard(idfrutta, nameFruit, familyFruit) {
 let cardFruit = document.createElement('div');
 cardFruit.classList.add('card-fruit-main');
 cardFruit.id = idfrutta;
 gridFruitMain.append(cardFruit);
 let image = document.createElement('img');
 image.classList.add('dimensione-img');
 image.src = 'assets/img/' + idfrutta + '.png';
 cardFruit.prepend(image);
 let descriptionCard = document.createElement('div');
 descriptionCard.classList.add('description-card');
 cardFruit.append(descriptionCard);
 let descriptionCardText = document.createElement('div');
 descriptionCardText.classList.add('description-card-text');
 descriptionCard.prepend(descriptionCardText);
 let prefer = document.createElement('img');
 prefer.src = 'assets/img/prefer-green-empty.png';
 descriptionCard.append(prefer);
 let nomeFrutto = document.createElement('h2');
 nomeFrutto.textContent = `${traductionPrint(nameFruit)}`;
 descriptionCardText.prepend(nomeFrutto);
 let famigliaFrutto = document.createElement('p');
 famigliaFrutto.textContent = `Family: ${familyFruit}`;
 descriptionCardText.append(famigliaFrutto);
}

let carosello = document.querySelector('.carosello');
let headerProdotto = document.querySelector('.header-prodotto');
let colUnoProdotto = document.querySelector('.col-1-prodotto');
let colDueProdotto = document.querySelector('.col-2-prodotto');
let valori = document.querySelector('#valori');
let titleProdotto = document.createElement('h2');
let textValori = document.createElement('h3');
let imgProduct = document.createElement('img');
let list1 = document.createElement('li');
let list2 = document.createElement('li');
let list3 = document.createElement('li');
let list4 = document.createElement('li');
let list5 = document.createElement('li');

function singleProduct(idfrutta, nameFruit, propriety) {
 titleProdotto.textContent = `${traductionPrint(nameFruit)}`;
 headerProdotto.prepend(titleProdotto);
 imgProduct.src = 'assets/img/' + idfrutta + '.png';
 imgProduct.classList.add('dimensione-img');
 colUnoProdotto.append(imgProduct);
 textValori.textContent = 'Valori Nutruzionali';
 colDueProdotto.prepend(textValori);
 list1.textContent = `Carboidrati: ${propriety.carbohydrates}`;
 valori.append(list1);
 list2.textContent = `Proteine: ${propriety.protein}`;
 valori.append(list2);
 list3.textContent = `Grassi: ${propriety.fat}`;
 valori.append(list3);
 list4.textContent = `Calorie: ${propriety.calories}`;
 valori.append(list4);
 list5.textContent = `Zuccheri: ${propriety.sugar}`;
 valori.append(list5);
}

let buttonHome = document.querySelector('#button-home');
let buttonPreferiti = document.querySelector('#button-preferiti');
let fruttiPreferiti = document.querySelector('#frutti-preferiti');
let bottonHomeMob = document.querySelector('#botton-home-mob');
let imgBottonHomeMob = bottonHomeMob.children[0];
let bottonPreferitiMob = document.querySelector('#button-preferiti-mob');
let imgBottnPreferitiMob = bottonPreferitiMob.children[0];

 fetch('/api/https://www.fruityvice.com/api/fruit/all') //--------------------------
 .then(function(risposta) {
   return risposta.json();
 })
 .then(function(frutta) {
    for(let i = 0; i < frutta.length; i++) {
     let idfrutta = frutta[i].id;
     let nameFruit = frutta[i].name;
     let familyFruit = frutta[i].family;
     createCard(idfrutta, nameFruit, familyFruit);
    }
    let card = document.querySelectorAll('.card-fruit-main');
    let prefer = document.querySelectorAll('.description-card img');
    for(let i = 0; i < card.length; i++) {
      card[i].addEventListener('click', function() {
        let idfrutta = frutta[i].id;
        let nameFruit = frutta[i].name;
        let propriety = frutta[i].nutritions;
        singleProduct(idfrutta, nameFruit, propriety);
        sectionGrid.style.display = 'none';
        sectionProduct.hidden = false;
        imgBottonHomeMob.src = 'assets/img/icon-home-mob.png';
     })
    }
    for(let i = 0; i < prefer.length; i++) {
      let cardCarosel = document.createElement('div');
      let imgCarosel = document.createElement('img');
      let nameCardCarosel = document.createElement('h2');
       prefer[i].addEventListener('click', function() {
         if(prefer[i].src.includes('empty')) {
         event.stopPropagation();
         let idfrutta = frutta[i].id;
         let nameFruit = frutta[i].name;
         cardCarosel.classList.add('card-carosel');
         cardCarosel.id = frutta[i].id;
         carosello.prepend(cardCarosel);
         imgCarosel.src = 'assets/img/' + idfrutta + '.png';
         imgCarosel.style.width = '100%';
         cardCarosel.prepend(imgCarosel);
         nameCardCarosel.textContent =`${traductionPrint(nameFruit)}`;
         cardCarosel.append(nameCardCarosel);
         prefer[i].src = 'assets/img/prefer-green-full.png';
       } else if (prefer[i].src.includes('full')) {
         event.stopPropagation();
         cardCarosel.remove();
         prefer[i].src = 'assets/img/prefer-green-empty.png';
       }
     })
    }
 })

buttonHome.addEventListener('click', function() {
  sectionGrid.removeAttribute('style');
  sectionProduct.hidden = true;
  fruttiPreferiti.hidden = true;
})
bottonHomeMob.addEventListener('click', function() {
  sectionGrid.removeAttribute('style');
  sectionProduct.hidden = true;
  fruttiPreferiti.hidden = true;
  imgBottonHomeMob.src = 'assets/img/icon-home-mob-green.png';
  imgBottnPreferitiMob.src = 'assets/img/icon-prefer-mob.png';
})
buttonPreferiti.addEventListener('click', function() {
  sectionGrid.style.display = 'none';
  fruttiPreferiti.hidden =  (carosello.children.length == 0)?  true: false;
  sectionProduct.hidden = true;
})
bottonPreferitiMob.addEventListener('click', function() {
  sectionGrid.style.display = 'none';
  fruttiPreferiti.hidden =  (carosello.children.length == 0)?  true: false;
  sectionProduct.hidden = true;
  imgBottonHomeMob.src = 'assets/img/icon-home-mob.png';
  imgBottnPreferitiMob.src = 'assets/img/prefer-green-full.png';
})

let inputRicerca = document.querySelector('#input-ricerca');
let buttonRicerca = document.querySelector('.button-ricerca');
let avvisoErrore = document.createElement('div');
avvisoErrore.classList.add('container-error');
let testoErrore = document.createElement('p');
testoErrore.textContent = "Ops! La ricerca non ha trovato alcun risultato. Procedi con un'altra ricerca";

function erroreRicerca() {
  avvisoErrore.append(testoErrore);
  sectionProduct.before(avvisoErrore);
}
function buttonSearch() {
  if (inputRicerca.value == '') {
    return;
  }

  fetch(`https://www.fruityvice.com/api/fruit/${traductionInput(inputRicerca.value)}`)
  .then(function(risposta) {
    return risposta.json();
  })
  .then(function(frutto) {
    singleProduct(frutto.id, frutto.name, frutto.nutritions);
    sectionGrid.style.display = 'none';
    sectionProduct.hidden = false;
    fruttiPreferiti.hidden = true;
    imgBottonHomeMob.src = 'assets/img/icon-home-mob.png';
    imgBottnPreferitiMob.src = 'assets/img/icon-prefer-mob.png';
  })
  .catch(function(err) {
    sectionProduct.hidden = true;
    erroreRicerca()
    return err;
  })
}

buttonRicerca.addEventListener('click', buttonSearch)
inputRicerca.addEventListener('focus', function() {
  if(inputRicerca.value) {
    inputRicerca.value = '';
  }
})
document.body.addEventListener('click',function() {
  avvisoErrore.remove();
})
