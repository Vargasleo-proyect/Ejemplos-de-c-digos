// Animaciones simples
document.addEventListener('DOMContentLoaded', () => {
    const codigos = document.querySelectorAll('.codigo');
    codigos.forEach(codigo => {
        codigo.style.opacity = 0;
        codigo.style.transition = 'opacity 2s';
        setTimeout(() => {
            codigo.style.opacity = 1;
        }, 500);
    });
});
