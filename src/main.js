const btn_prev = document.querySelector('.carousel__btn--prev');
const btn_next = document.querySelector('.carousel__btn--next');
const carousel = document.querySelector('.carousel__container');
const sabores = document.querySelectorAll('.sabor');

let indice = 0;

btn_next.addEventListener('click', () =>{

  indice++;
  console.log('Estoy en el índice:', indice);
});