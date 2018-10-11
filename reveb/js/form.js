//открыть модально окно
var formOpen = document.querySelector(".call-us-button");
//закрыть модально окно
var formClose = document.querySelector(".close-modal-form");
//модально окно
var modalWindow = document.querySelector(".modal-form");
//модальное окно наложения
var overlayWindow = document.querySelector(".modal-overlay");
//введите ваше имя
var formName = document.querySelector("#your-name");

//введите ваше имя 2
var formNameTwo = document.querySelector("form input");


//ваш email
var formMail = document.querySelector("#your-mail");
//форма
var form = document.querySelector(".modal-form form");

//открытие модальной формы
formOpen.addEventListener("click", function(){
  event.preventDefault();
  modalWindow.classList.add("modal-form-show");
  overlayWindow.classList.add("modal-overlay-show");
  formName.focus();
});

//закрытие модальной формы по клику на крестик
formClose.addEventListener("click", function(){
  event.preventDefault();
  modalWindow.classList.remove("modal-form-show");
  overlayWindow.classList.remove("modal-overlay-show");
});

//закрытие модальной формы по клику на слой наложения
overlayWindow.addEventListener("click", function(){
  event.preventDefault();
  modalWindow.classList.remove("modal-form-show");
  overlayWindow.classList.remove("modal-overlay-show");
});
