// Efecto de scroll para el NavBar
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Pequeño efecto 3D para la tarjeta de código que sigue el cursor
    const card = document.querySelector('.main-card');
    
    if (card) {
        document.addEventListener('mousemove', (e) => {
            // Solo si estamos en pantallas grandes
            if (window.innerWidth > 992) {
                const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
                const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
                card.style.transform = `perspective(1000px) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
            }
        });

        // Resetear la tarjeta al salir del documento
        document.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateY(-5deg) rotateX(5deg)`;
        });
    }
});
