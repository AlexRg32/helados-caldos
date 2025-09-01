document.addEventListener('DOMContentLoaded', function() {
    const contenedorCarrusel = document.querySelector('.carousel__contenido');
    const btnSiguiente = document.querySelector('.carousel__btn--next');
    const btnAnterior = document.querySelector('.carousel__btn--prev');
    let indice = 0;

    if (!contenedorCarrusel || !btnSiguiente || !btnAnterior) {
        console.error('No se encontraron los elementos del carrusel');
        return;
    }

    function moverCarrusel() {
        const transform = window.innerWidth < 1023 
            ? `translateX(-${indice * 100}%)` 
            : `translateX(-${indice * (100 / 3)}%)`;
        contenedorCarrusel.style.transform = transform;
    }

    function siguiente() {
        const limite = window.innerWidth < 1023 ? 5 : 3;
        indice = indice === limite ? 0 : indice + 1;
        moverCarrusel();
    }

    function anterior() {
        const limite = window.innerWidth < 1023 ? 5 : 3;
        indice = indice === 0 ? limite : indice - 1;
        moverCarrusel();
    }

    btnSiguiente.addEventListener('click', siguiente);
    btnAnterior.addEventListener('click', anterior);
    window.addEventListener('resize', () => {
        indice = 0;
        moverCarrusel();
    });

    moverCarrusel();
});