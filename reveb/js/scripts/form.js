(function () {
  let formOpen = document.querySelector('.call-us-button');
  let formClose = document.querySelector('.close-modal-form');
  let modalWindow = document.querySelector('.modal-form');
  let overlayWindow = document.querySelector('.modal-overlay');
  let formName = document.querySelector('#your-name');

  formOpen.addEventListener('click', function () {
    event.preventDefault();
    modalWindow.classList.add('modal-form-show');
    overlayWindow.classList.add('modal-overlay-show');
    formName.focus();
  });

  formClose.addEventListener('click', function () {
    event.preventDefault();
    modalWindow.classList.remove('modal-form-show');
    overlayWindow.classList.remove('modal-overlay-show');
  });

  overlayWindow.addEventListener('click', function () {
    event.preventDefault();
    modalWindow.classList.remove('modal-form-show');
    overlayWindow.classList.remove('modal-overlay-show');
  });
})();
