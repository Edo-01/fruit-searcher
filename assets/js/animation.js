"use strict";

let bottone = document.querySelectorAll('.bottone');

for (let i = 0; i < bottone.length; i++) {
bottone[i].addEventListener('mouseenter', function() {
    bottone[i].classList.remove('bottone-leave');
    bottone[i].classList.add('bottone-enter');
});
bottone[i].addEventListener('mouseleave', function() {
    bottone[i].classList.remove('bottone-enter');
    bottone[i].classList.add('bottone-leave');
});
}

let scrollUp = document.querySelector('.scroll-up');

scrollUp.addEventListener('click', function() {
  window.scrollTo({top:0, left:0, behavior:'smooth'});
});

let tastoDx = document.querySelector('.scrolla-dx');
let tastoSx = document.querySelector('.scrolla-sx');

tastoDx.addEventListener('click', function() {
   carosello.scrollBy({top:0, left:300, behavior: 'smooth'});
});

tastoSx.addEventListener('click', function() {
   carosello.scrollBy({top:0, left:-300, behavior: 'smooth'});
});

let buttonLigth = document.querySelector('#button-ligth');
let buttonLigthMob = document.querySelector('#button-ligth-mob');
let buttonLigthMobImg = buttonLigthMob.children[0];

buttonLigth.addEventListener('click', function() {
  if(document.body.className !== 'dark-mod') {
  document.body.classList.add('dark-mod');
} else {
  document.body.classList.remove('dark-mod');
}
})
buttonLigthMob.addEventListener('click', function() {
  if(document.body.className !== 'dark-mod') {
  document.body.classList.add('dark-mod');
  buttonLigthMobImg.src = 'assets/img/icon-ligth-mob-on.png';
} else {
  document.body.classList.remove('dark-mod');
  buttonLigthMobImg.src = 'assets/img/icon-ligth-mob.png';
}
})
