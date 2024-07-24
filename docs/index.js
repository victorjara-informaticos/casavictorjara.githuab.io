numeroImagenes = 25
imagenes = []

/**
 * Agrego los puntitos que controlan el carrusel
 */
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

/**
 * Agrego los items del carrusel con las imagenes que deberían ir allí siguiendo la misma convención de nombre y de formato
 */
let itemsDeCarrusel = document.getElementById('items-de-carrusel')
for (let i=0;i<numeroImagenes;i++) {
  nuevoItem = document.createElement('div');
  nuevoItem.classList.add('carousel-item');
  if (i==0) {
    nuevoItem.classList.add('active');
  }

  contenedorImagen = document.createElement('div');
  contenedorImagen.classList.add('d-flex');
  contenedorImagen.classList.add('justify-content-center');
  contenedorImagen.classList.add('align-items-center');
  contenedorImagen.style.cssText = 'height: 300px; overflow: hidden;';

  imagen = document.createElement('img')
  imagen.classList.add('d-block')
  imagen.classList.add('w-100')
  imagen.style.cssText = 'object-fit: cover; height: 100%;';
  imagen.setAttribute('src', "./assets/carusel/image ("+(i+1)+").png");
  
  contenedorImagen.appendChild(imagen)
  nuevoItem.appendChild(contenedorImagen)
  itemsDeCarrusel.appendChild(nuevoItem)
  
}
