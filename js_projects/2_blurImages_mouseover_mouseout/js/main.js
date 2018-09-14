// При наведении мышки на изображении оно становится чистым
// При уводе из зоны изображения, оно снова становится мутным
var image = document.querySelectorAll('.img');

for (let i = 0; i < image.length; i++) {
  image[i].addEventListener('mouseover', showClearImage);
  image[i].addEventListener('mouseout', returnBlurImage);
}

function showClearImage(e) {
  var clickImage = e.currentTarget;
  clickImage.src = 'img/' + clickImage.id + '.jpg';
}

function returnBlurImage(e) {
  var clickImage = e.currentTarget;
  clickImage.src = 'img/' + clickImage.id + 'blur' + '.jpg';
}

