// range slider
let startPin = document.querySelector('.pin-start');
let endPin = document.querySelector('.pin-end');
let startInput = document.querySelector('.min-price');
let endInput = document.querySelector('.max-price');
let pinArea = document.querySelector('.range-control');
let scale = document.querySelector('.scale');
let initialScale = document.querySelector('.initial-scale');


// Определяем шаг ползунка в зависимости от длины шкалы и заданных значений
let maxInputValue = endInput.value;
let computedStyle = getComputedStyle(scale);
let scaleLength = parseInt(computedStyle.width);
let pinStep = Math.round(maxInputValue / scaleLength);


// Определяем поведение startPin
startPin.addEventListener('mousedown', (event) => {
  event.preventDefault();
  let startX = event.clientX;

  pinArea.addEventListener('mousemove', onMouseMove);
  pinArea.addEventListener('mouseup', onMouseUp);

  // смещение ползунка mousemove
  function onMouseMove(event) {
    event.preventDefault();
    let shiftX = startX - event.clientX;

    // перезаписываем стартовую координату после смещения ползунка
    startX = event.clientX;

    // изменяем положение ползунка
    startPin.style.left = (startPin.offsetLeft - shiftX) + 'px';

    // записываем текущее значение в инпут
    startInput.value = parseInt(startPin.style.left) * pinStep;

    // перерисовываем цвет линии
    initialScale.style.marginLeft = `${parseInt(startPin.style.left)}px`;

    // задаем границы движения начального ползунка
    if (startPin.offsetLeft < 0) {
      onMouseUp();
      startPin.style.left = '0px';
      startInput.value = 0;
    } else if (startPin.offsetLeft > scaleLength) {
      onMouseUp();
      startPin.style.left = `${scaleLength}px`;
      startInput.value = maxInputValue;
    }

    // останавливаем ползунки если они начинают перекрывать друг друга
    if ((startPin.offsetLeft + 20) > endPin.offsetLeft) {
      onMouseUp();
      startPin.style.left = (endPin.offsetLeft - 20) + 'px';
      startInput.value = parseInt(startPin.style.left) * pinStep;
    }

  }

  // отписываемся от событий при поднятии мыши
  function onMouseUp() {
    pinArea.removeEventListener('mousemove', onMouseMove);
    pinArea.removeEventListener('mouseup', onMouseUp);
  }
});


// Определяем поведение endPin
endPin.addEventListener('mousedown', (event) => {
  event.preventDefault();
  let startXfromEnd = event.clientX;

  pinArea.addEventListener('mousemove', onMouseMove);
  pinArea.addEventListener('mouseup', onMouseUp);

  // смещение ползунка mousemove
  function onMouseMove(event) {
    event.preventDefault();
    let shiftX = startXfromEnd - event.clientX;

    // перезаписываем стартовую координату после смещения ползунка
    startXfromEnd = event.clientX;

    // изменяем положение ползунка
    endPin.style.left = (endPin.offsetLeft - shiftX) + 'px';

    // записываем текущее значение в инпут
    endInput.value = parseInt(endPin.style.left) * pinStep;

    // перерисовываем цвет линии
    let tabFromRight = scaleLength - parseInt(endPin.style.left);
    initialScale.style.marginRight = `${tabFromRight}px`;

    // задаем границы движения начального ползунка
    if (endPin.offsetLeft < 0) {
      onMouseUp();
      endPin.style.left = '0px';
      endInput.value = 0;
    } else if (endPin.offsetLeft > scaleLength) {
      onMouseUp();
      endPin.style.left = `${scaleLength}px`;
      endInput.value = maxInputValue;
    }

    // останавливаем ползунки если они начинают перекрывать друг друга
    if ((endPin.offsetLeft - 20) < startPin.offsetLeft ) {
      onMouseUp();
      endPin.style.left = (startPin.offsetLeft + 20) + 'px' ;
      endInput.value = parseInt(endPin.style.left) * pinStep;
    }

  }

  // отписываемся от событий при поднятии мыши
  function onMouseUp() {
    pinArea.removeEventListener('mousemove', onMouseMove);
    pinArea.removeEventListener('mouseup', onMouseUp);
  }
});



// события для управления ползунками через инпуты
startInput.addEventListener('input', onStartInput);

function onStartInput(event) {
  event.preventDefault();
  // изменяем положение ползунка
  startPin.style.left = (startInput.value / pinStep) + 'px';

  // перерисовываем цвет линии
  initialScale.style.marginLeft = startPin.style.left;
}

endInput.addEventListener('input', onEndInput);

function onEndInput(event) {
  event.preventDefault();
  // изменяем положение ползунка
  endPin.style.left = (endInput.value / pinStep) + 'px';

  // перерисовываем цвет линии
  initialScale.style.marginRight = `${scaleLength - parseInt(endPin.style.left)}px`;
}