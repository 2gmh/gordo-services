function animateHero() {
  const hero = document.querySelector('.hero');
  hero.style.animation = 'fade 1.5s ease-in-out alternate infinite';
}

// Función para animar los servicios
function animateServices() {
  const services = document.querySelector('.services');
  services.style.animation = 'slide 1.5s ease-in-out alternate infinite';
}

// Función para animar las ofertas
function animateOffers() {
  const offers = document.querySelector('.offers');
  offers.style.animation = 'slide 1.5s ease-in-out alternate infinite';
}

// Función para animar el soporte
function animateSupport() {
  const support = document.querySelector('.support');
  support.style.animation = 'slide 1.5s ease-in-out alternate infinite';
}

// Llamar a las funciones de animación
animateLogo();
animateHero();
animateServices();
animateOffers();
animateSupport();