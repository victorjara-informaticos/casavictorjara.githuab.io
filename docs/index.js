numeroImagenes = 25
imagenes = []

let indicadoresDeCarrusel = document.getElementById('indicadores-de-carrusel')
for (let i=0;i<numeroImagenes;i++) {
  nuevoBoton = document.createElement("button");
  nuevoBoton["type"]='button';
  nuevoBoton.setAttribute("data-bs-target", '#myCarousel')
  nuevoBoton.setAttribute("data-bs-slide-to", i);
  nuevoBoton.setAttribute("aria-label", "Slide "+(i+1));
  if (i==0) {
    nuevoBoton.classList.add('active');
    nuevoBoton.setAttribute("aria-current", "true");
  }
  indicadoresDeCarrusel.appendChild(nuevoBoton);
}

