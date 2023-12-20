document.addEventListener("DOMContentLoaded", function() {
    var enlaces = document.querySelectorAll('.parent2 a');

    enlaces.forEach(function(enlace) {
        enlace.addEventListener('click', function(event) {
            event.preventDefault();

            var destino = enlace.getAttribute('href').substring(1);
            var elementoGaleriaActual = document.querySelector('.bordeVerde');
            var elementoGaleriaNuevo = document.getElementById(destino);

            // Quita la clase 'bordeVerde' del elemento actual
            if (elementoGaleriaActual) {
                elementoGaleriaActual.classList.remove('bordeVerde');
            }

            // Agrega la clase 'bordeVerde' al nuevo elemento de la galería
            elementoGaleriaNuevo.classList.add('bordeVerde');
        });
    });
});