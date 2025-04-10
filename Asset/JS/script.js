const images = document.querySelectorAll('.galeria-img');

const mensajeElemento = document.getElementById('mensaje');

images.forEach(image => {
  image.addEventListener('click', function() {

    const imageName = image.alt || "Imagen desconocida"; 
    mensajeElemento.textContent = `Has seleccionado la imagen: ${imageName}`;

    mensajeElemento.style.display = 'block';

    setTimeout(() => {
      mensajeElemento.style.display = 'none';
    }, 3000);
  });
});
