const contenedorCarrusel = document.querySelector('.carousel__contenido');
const btnSiguiente = document.querySelector('.carousel__btn--next');
const btnAnterior = document.querySelector('.carousel__btn--prev');

let indice = 0;

function moverCarrusel() {

  if(window.innerWidth < 768){
    contenedorCarrusel.style.transform = 'translateX(' + (indice * -100) + '%)';
  }else{
    contenedorCarrusel.style.transform = `translateX(-${indice * (100/3)}%)`;
  }
  console.log(indice);
}

moverCarrusel();

btnAnterior.addEventListener('click', () => {
  if (indice === 0) {
    indice = 3;
  } else {
    indice--;
  }

  moverCarrusel();
})

btnSiguiente.addEventListener('click', () => {
  if (indice === 3) {
    indice = 0;
  } else {
    indice++;
  }
  moverCarrusel();
})
