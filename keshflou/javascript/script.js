//slick sliders
$(document).ready(function(){

$('.partner__slider').slick({
  arrows: false,
  dots: true,
  variableWidth: true
});

$('.review__slider').slick({
  arrows: false,
  dots: true,
  slidesToShow: 4
});

$('.photo__slider').slick({
   arrows: false,
   dots: true,
   slidesToShow: 3
 });

});


//modal form

//открыть модальное окно
var formOpen = document.querySelector(".btn--header");
//закрыть модально окно
var formClose = document.querySelector(".modal__close-form");
//модально окно
var modalWindow = document.querySelector(".modal__form");
//модальное окно наложения
var overlayWindow = document.querySelector(".modal__overlay");

//открытие модальной формы по клику на копку Заказать звонок
formOpen.addEventListener("click", function(){
  event.preventDefault();
  modalWindow.classList.add("modal__form--show");
  overlayWindow.classList.add("modal__overlay--show");
});
//закрытие модальной формы по клику на крестик
formClose.addEventListener("click", function(){
  event.preventDefault();
  modalWindow.classList.remove("modal__form--show");
  overlayWindow.classList.remove("modal__overlay--show");
});
//закрытие модальной формы по клику на слой наложения
overlayWindow.addEventListener("click", function(){
  event.preventDefault();
  modalWindow.classList.remove("modal__form--show");
  overlayWindow.classList.remove("modal__overlay--show");
});
