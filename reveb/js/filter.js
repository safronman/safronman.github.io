(function () {
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


  const onStartEndPinMousedown = (event, pin, input, redrawLineColor, stopPinWhenOverlay) => {
    event.preventDefault();
    let startX = event.clientX;

    pinArea.addEventListener('mousemove', onMouseMove);
    pinArea.addEventListener('mouseup', onMouseUp);

    // отписываемся от событий при поднятии мыши
    function onMouseUp() {
      pinArea.removeEventListener('mousemove', onMouseMove);
      pinArea.removeEventListener('mouseup', onMouseUp);
    }

    // смещение ползунка mousemove
    function onMouseMove(event) {
      event.preventDefault();
      let shiftX = startX - event.clientX;
      // перезаписываем стартовую координату после смещения ползунка
      startX = event.clientX;
      // изменяем положение ползунка
      pin.style.left = (pin.offsetLeft - shiftX) + 'px';
      // записываем текущее значение в инпут
      input.value = parseInt(pin.style.left) * pinStep;
      // перерисовываем цвет линии
      redrawLineColor(pin);
      // задаем границы движения начального ползунка
      if (pin.offsetLeft < 0) {
        onMouseUp();
        pin.style.left = '0px';
        input.value = 0;
      } else if (pin.offsetLeft > scaleLength) {
        onMouseUp();
        pin.style.left = `${scaleLength}px`;
        input.value = maxInputValue;
      }

      // останавливаем ползунки если они начинают перекрывать друг друга
      stopPinWhenOverlay(pin, input, onMouseUp);

    }
  }

  // Определяем поведение startPin
  startPin.addEventListener('mousedown', (e) => {
    onStartEndPinMousedown(e, startPin, startInput,
      (pin) => {
        initialScale.style.marginLeft = `${parseInt(pin.style.left)}px`;
      },
      (pin, input, onMouseUpCallback) => {
        if ((startPin.offsetLeft + 20) > endPin.offsetLeft) {
          onMouseUpCallback();
          pin.style.left = (endPin.offsetLeft - 20) + 'px';
          input.value = parseInt(pin.style.left) * pinStep;
        }
      }
    );


  });


  // Определяем поведение endPin
  endPin.addEventListener('mousedown', (e) => {
    onStartEndPinMousedown(e, endPin, endInput,
      (pin) => {
        let tabFromRight = scaleLength - parseInt(pin.style.left);
        initialScale.style.marginRight = `${tabFromRight}px`;
      },
      (pin, input, onMouseUpCallback) => {
        if ((endPin.offsetLeft - 20) < startPin.offsetLeft) {
          onMouseUpCallback();
          pin.style.left = (startPin.offsetLeft + 20) + 'px';
          input.value = parseInt(pin.style.left) * pinStep;
        }
      }
    );
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

})();

