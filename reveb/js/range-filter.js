(function () {
this.renderTemplate = new RenderTemplate();
this.renderTemplate.init();

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
let pinStep = Math.round(maxInputValue / scaleLength); // 41 px

// Ширина ползунка = 20px
let pinWidth = 20;


// --------- Управление фильтром при помощи левого ползунка ---------
startPin.addEventListener('mousedown', (e) => {
  onStartEndPinMousedown(e, startPin, startInput,
    (pin) => {
      initialScale.style.marginLeft = `${parseInt(pin.style.left)}px`;
    },
    (pin, input, onMouseUpCallback) => {
      if ((startPin.offsetLeft + pinWidth) > endPin.offsetLeft) {
        onMouseUpCallback();
        pin.style.left = `${(endPin.offsetLeft - pinWidth)}px`;
        input.value = parseInt(pin.style.left) * pinStep;
      }
    }
  );
});


// --------- Управление фильтром при помощи правого ползунка ---------
endPin.addEventListener('mousedown', (e) => {
  onStartEndPinMousedown(e, endPin, endInput,
    (pin) => {
      initialScale.style.marginRight = `${scaleLength - parseInt(pin.style.left)}px`;
    },
    (pin, input, onMouseUpCallback) => {
      if ((endPin.offsetLeft - pinWidth) < startPin.offsetLeft) {
        onMouseUpCallback();
        pin.style.left = `${(startPin.offsetLeft + pinWidth)}px`;
        input.value = parseInt(pin.style.left) * pinStep;
      }
    }
  );
});


const onStartEndPinMousedown = (event, pin, input, redrawLineColor, stopPinWhenOverlay) => {
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
    pin.style.left = `${(pin.offsetLeft - shiftX)}px`;

    // записываем текущее значение в инпут
    input.value = parseInt(pin.style.left) * pinStep;

    // задаем границы движения ползунков
    if (pin.offsetLeft < 0) {
      onMouseUp();
      pin.style.left = '0px';
      input.value = 0;
    } else if (pin.offsetLeft > scaleLength) {
      onMouseUp();
      pin.style.left = `${scaleLength}px`;
      input.value = maxInputValue;
    }

    // перерисовываем цвет линии
    redrawLineColor(pin);

    // останавливаем ползунки если они начинают перекрывать друг друга
    stopPinWhenOverlay(pin, input, onMouseUp);
  }

  // отписываемся от событий при поднятии мыши
  function onMouseUp() {
    pinArea.removeEventListener('mousemove', onMouseMove);
    pinArea.removeEventListener('mouseup', onMouseUp);

    console.log(`startInput.value при перетягивании ползунков: ${startInput.value}`);
    console.log(`endInput.value при перетягивании ползунков: ${endInput.value}`);

    filterRangePriceValues();
  }
}


// ---------Управление фильтром при помощи левого инпута---------
startInput.addEventListener('change', (event) => {
  event.preventDefault();

  // изменяем положение ползунка
  startPin.style.left = `${event.currentTarget.value / pinStep}px`;

  // перерисовываем цвет линии
  initialScale.style.marginLeft = startPin.style.left;

  // задаем левую границу ползунку
  if (event.currentTarget.value < 0) {
    startPin.style.left = '0px';
    event.currentTarget.value = 0;
  }

  // проверка на пересекаемость пинов
  if (parseInt(event.currentTarget.value) + pinWidth * pinStep > parseInt(endInput.value)) {
    startPin.style.left = `${endPin.offsetLeft - pinWidth}px`;
    event.currentTarget.value = endInput.value - pinWidth * pinStep;
  }

  console.log(`startInput.value при изменении левого инпута: ${startInput.value}`);
  console.log(`endInput.value при изменении левого инпута: ${endInput.value}`);

  filterRangePriceValues();
});


// ---------Управление фильтром при помощи правого инпута---------
endInput.addEventListener('change', (event) => {
  event.preventDefault();

  // изменяем положение ползунка
  endPin.style.left = `${event.currentTarget.value / pinStep}px`;

  // перерисовываем цвет линии
  initialScale.style.marginRight = `${scaleLength - parseInt(endPin.style.left)}px`;

  // задаем правую границу ползунку
  if (event.currentTarget.value > parseInt(maxInputValue)) {
    endPin.style.left = `${scaleLength}px`;
    event.currentTarget.value = parseInt(maxInputValue);
  }

  // проверка на пересекаемость пинов
  if (parseInt(event.currentTarget.value) < parseInt(startInput.value) + pinWidth * pinStep) {
    endPin.style.left = `${startPin.offsetLeft + pinWidth}px`;
    event.currentTarget.value = parseInt(startInput.value) + pinWidth * pinStep;
  }

  console.log(`startInput.value при изменении правого инпута: ${startInput.value}`);
  console.log(`endInput.value при изменении правого инпута: ${endInput.value}`);

  filterRangePriceValues();
});


// функция для фильтрации массива в зависимости от выбранной цены диапазона
function filterRangePriceValues() {
  console.log(this.renderTemplate.templateArray);

  let resultFilterArray = this.renderTemplate.templateArray.filter( item => {
    return parseInt(item.price) > parseInt(startInput.value) && parseInt(item.price) < parseInt(endInput.value);
  });

  this.renderTemplate.templateArray = resultFilterArray;
  console.log(this.renderTemplate.templateArray);

  this.renderTemplate.render();
  this.renderTemplate.templateArray = null;
  this.renderTemplate.init();
}

})();
