// По клику показываем clear изображение
// Через 2 секунды изображение возвращается в исходное состояние
var image = document.querySelectorAll('.img');

for (let i = 0; i < image.length; i++) {
  image[i].addEventListener('click', showClearImage);
}

// 1 way
function showClearImage(e) {
  var clickImage = e.currentTarget;
  clickImage.src = 'img/' + clickImage.id + '.jpg';

  setTimeout(returnBlurImage, 2000, clickImage);
}

function returnBlurImage(clickImage) {
  clickImage.src = 'img/' + clickImage.id + 'blur' + '.jpg';
}

// // 2 way
// function showClearImage(event) {
//   var clickImage = event.currentTarget;
//   clickImage.src = event.currentTarget.dataset.clearSrc;

//   setTimeout(showAlert, 2000, clickImage);
// }


