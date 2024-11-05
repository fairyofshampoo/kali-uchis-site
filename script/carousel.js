let indiceActual = 0;
const intervaloTiempo = 5000;

function mostrarImagen(indice) {
    const imagenes = document.querySelectorAll('.carousel-images img');
    imagenes.forEach((img, i) => {
        img.classList.remove('active');
        if (i === indice) {
            img.classList.add('active');
        }
    });
}

function moverCarrusel(direccion) {
    const imagenes = document.querySelectorAll('.carousel-images img');
    indiceActual = (indiceActual + direccion + imagenes.length) % imagenes.length;
    mostrarImagen(indiceActual);
}

setInterval(() => {
    moverCarrusel(1);
}, intervaloTiempo);

mostrarImagen(indiceActual);