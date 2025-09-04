

// Mantener el carrusel existente como fallback
document.addEventListener('DOMContentLoaded', function() {
    // Tu código existente como backup
    const contenedorCarrusel = document.querySelector('.carousel__contenido');
    const btnSiguiente = document.querySelector('.carousel__btn--next');
    const btnAnterior = document.querySelector('.carousel__btn--prev');
    let indice = 0;

    if (!contenedorCarrusel || !btnSiguiente || !btnAnterior) {
        console.error('No se encontraron los elementos del carrusel');
        return;
    }

    function moverCarrusel() {
        if (window.innerWidth < 768) {
            contenedorCarrusel.style.transform = `translateX(-${indice * 100}%)`;
        } else {
            contenedorCarrusel.style.transform = `translateX(-${indice * (100 / 3)}%)`;
        }
    }

    function siguiente() {
        if (window.innerWidth < 768) {
            if (indice === 5) {
                indice = 0;
            } else {
                indice++;
            }
        } else {
            if (indice === 3) {
                indice = 0;
            } else {
                indice++;
            }
        }
        moverCarrusel();
    }

    function anterior() {
        if (window.innerWidth < 768) {
            if (indice === 0) {
                indice = 5;
            } else {
                indice--;
            }
        } else {
            if (indice === 0) {
                indice = 3;
            } else {
                indice--;
            }
        }
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