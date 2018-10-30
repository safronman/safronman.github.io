let slides = document.querySelectorAll('.slide');
let sliderControls = document.querySelectorAll('.slider-control');
// переводим nodelist in array
let arraySliderControls = [... sliderControls];

for (let i = 0; i < sliderControls.length; i++) {
  sliderControls[i].addEventListener('click', makeActiveControl);
  sliderControls[i].addEventListener('click', showSlide);
}

function makeActiveControl(event) {
  let activeControl = document.querySelector('.slider-control-active');
  activeControl.classList.remove('slider-control-active');
  event.currentTarget.classList.add('slider-control-active');
}

function showSlide(event) {
  let activeSlide = document.querySelector('.slide-show');
  activeSlide.classList.remove('slide-show');
  let indexEl = arraySliderControls.indexOf(event.currentTarget);
  slides[indexEl].classList.add('slide-animation');
  slides[indexEl].classList.add('slide-show');
}

