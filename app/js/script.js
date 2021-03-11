let btnHamburguer = document.getElementById('btnHamburguer');
let header        = document.querySelector('header');
let fade          = document.querySelectorAll('.fade');

btnHamburguer.addEventListener("click", function(){

   if(header.classList.contains('open')) {
      header.classList.remove('open');

      fade.forEach(element => {
         element.classList.add('fadeOut');
         element.classList.remove('fadeIn');
      });
   } else {
      header.classList.add('open');

      fade.forEach(element => {
         element.classList.remove('fadeOut');
         element.classList.add('fadeIn');
      });
   }
});