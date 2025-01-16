let currentSlide = 0;
setInterval(() => {
    moveSlide(1);
}, 2000);
function moveSlide(step) {
  const slides = document.querySelectorAll('.carousel-slide');
  currentSlide += step;

  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  } else if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  const newTransform = `translateX(-${currentSlide * 100}%)`;
  document.querySelector('.carousel-images').style.transform = newTransform;
}
