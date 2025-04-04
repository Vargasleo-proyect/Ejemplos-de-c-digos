// Animación al hacer scroll
document.addEventListener('DOMContentLoaded', () => {
    const elementosAnimados = document.querySelectorAll('.scroll-animation');

    const mostrarElemento = () => {
        elementosAnimados.forEach(el => {
            const posicion = el.getBoundingClientRect().top;
            const alturaPantalla = window.innerHeight;

            if (posicion < alturaPantalla - 100) {
                el.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', mostrarElemento);
    mostrarElemento(); // Para animar elementos visibles desde el inicio
});
