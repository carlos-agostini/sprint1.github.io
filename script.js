// script.js

// Obtener referencias a los elementos del DOM
const carousel = document.getElementById('carouselExampleIndicators');

// Crear diapositivas dinámicamente (reemplaza con tus datos reales)
const slides = carousel.querySelector('.carousel-inner');
const slide1 = document.createElement('div');
slide1.classList.add('carousel-item', 'active');
slide1.innerHTML = `
  <img src="resources/arquitectura.jpg" class="d-block w-100" alt="Primera diapositiva">
  <div class="carousel-caption d-none d-md-block">
    <h5>Primera diapositiva</h5>
    <p>Descripción de la primera diapositiva.</p>
  </div>
`;
slides.appendChild(slide1);

// Crear más diapositivas de forma similar

// Inicializar el carrusel de Bootstrap
const carouselInstance = new bootstrap.Carousel(carousel, {
  interval: 5000,
  wrap: true
});

// Ejemplo de un evento al hacer clic en un botón (aún no implementado en el HTML)
document.getElementById('myButton').addEventListener('click', () => {
  // Aquí puedes agregar la lógica para lo que debería ocurrir al hacer clic en el botón
  console.log('¡Se hizo clic en el botón!');
});