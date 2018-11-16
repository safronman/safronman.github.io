class RangeFilter {
  constructor() {
    this.startPin = null;
    this.endPin = null;
    this.startInput = null;
    this.endInput = null;
    this.pinArea = null;
    this.scale = null;
    this.initialScale = null;

    this.maxInputValue = null;
    this.scaleLength = null;
    this.pinStep = 0;
    this.pinWidth = 0;

    this.renderTemplate = new RenderTemplate();
    this.renderTemplate.init();
  }

  init() {
    this.startPin = document.querySelector('.pin-start');
    this.endPin = document.querySelector('.pin-end');
    this.startInput = document.querySelector('.min-price');
    this.endInput = document.querySelector('.max-price');
    this.pinArea = document.querySelector('.range-control');
    this.scale = document.querySelector('.scale');
    this.initialScale = document.querySelector('.initial-scale');

    this.maxInputValue = this.endInput.value; // 9000
    this.scaleLength = 220;
    this.pinStep = 41;
    this.pinWidth = 20;


    // --------- Управление фильтром при помощи инпутов ---------
    this.startInput.addEventListener('change', this.onStartInput.bind(this));
    this.endInput.addEventListener('change', this.onEndInput.bind(this));


    // --------- Управление фильтром при помощи левого ползунка ---------
    this.startPin.addEventListener('mousedown', (e) => {
      this.onStartEndPinMousedown(e, this.startPin, this.startInput,
        (pin) => {
          this.initialScale.style.marginLeft = `${parseInt(pin.style.left)}px`;
        },
        (pin, input, onMouseUpCallback) => {
          if ((this.startPin.offsetLeft + this.pinWidth) > this.endPin.offsetLeft) {
            onMouseUpCallback();
            pin.style.left = `${(this.endPin.offsetLeft - this.pinWidth)}px`;
            input.value = parseInt(pin.style.left) * this.pinStep;
          }
        }
      )
    })

    // --------- Управление фильтром при помощи правого ползунка ---------
    this.endPin.addEventListener('mousedown', (e) => {
      this.onStartEndPinMousedown(e, this.endPin, this.endInput,
        (pin) => {
          this.initialScale.style.marginRight = `${this.scaleLength - parseInt(pin.style.left)}px`;
        },
        (pin, input, onMouseUpCallback) => {
          if ((this.endPin.offsetLeft - this.pinWidth) < this.startPin.offsetLeft) {
            onMouseUpCallback();
            pin.style.left = `${(this.startPin.offsetLeft + this.pinWidth)}px`;
            input.value = parseInt(pin.style.left) * this.pinStep;
          }
        }
      );
    });

  }


  onStartEndPinMousedown(event, pin, input, redrawLineColor, stopPinWhenOverlay) {
    event.preventDefault();

    let startX = event.clientX;

    let bindedOnMouseMove = onMouseMove.bind(this);
    let bindedOnMouseUp = onMouseUp.bind(this);

    this.pinArea.addEventListener('mousemove', bindedOnMouseMove);
    this.pinArea.addEventListener('mouseup', bindedOnMouseUp);

    // смещение ползунка mousemove
    function onMouseMove(event) {
      event.preventDefault();
      let shiftX = startX - event.clientX;

      // перезаписываем стартовую координату после смещения ползунка
      startX = event.clientX;

      // изменяем положение ползунка
      pin.style.left = `${(pin.offsetLeft - shiftX)}px`;

      // записываем текущее значение в инпут
      input.value = parseInt(pin.style.left) * this.pinStep;



      // задаем границы движения ползунков
      if (pin.offsetLeft < 0) {
        bindedOnMouseUp();
        pin.style.left = '0px';
        input.value = 0;
      } else if (pin.offsetLeft > this.scaleLength) {
        bindedOnMouseUp();
        pin.style.left = `${this.scaleLength}px`;
        input.value = this.maxInputValue;
      }

      // перерисовываем цвет линии
      redrawLineColor(pin);

      // останавливаем ползунки если они начинают перекрывать друг друга
      stopPinWhenOverlay(pin, input, bindedOnMouseUp);
    }

    // отписываемся от событий при поднятии мыши
    function onMouseUp() {

      this.pinArea.removeEventListener('mousemove', bindedOnMouseMove);
      this.pinArea.removeEventListener('mouseup', bindedOnMouseUp);

      console.log(`startInput.value при перетягивании ползунков: ${this.startInput.value}`);
      console.log(`endInput.value при перетягивании ползунков: ${this.endInput.value}`);

      this.filterRangePriceValues();
    }
  }




  onStartInput(event) {
    event.preventDefault();

    // изменяем положение ползунка
    this.startPin.style.left = `${event.currentTarget.value / this.pinStep}px`;

    // перерисовываем цвет линии
    this.initialScale.style.marginLeft = this.startPin.style.left;

    // задаем левую границу ползунку
    if (event.currentTarget.value < 0) {
      this.startPin.style.left = '0px';
      event.currentTarget.value = 0;
    }

    // проверка на пересекаемость пинов
    if (parseInt(event.currentTarget.value) + this.pinWidth * this.pinStep > parseInt(this.endInput.value)) {
      this.startPin.style.left = `${this.endPin.offsetLeft - this.pinWidth}px`;
      event.currentTarget.value = this.endInput.value - this.pinWidth * this.pinStep;
    }

    console.log(`startInput.value при изменении левого инпута: ${this.startInput.value}`);
    console.log(`endInput.value при изменении левого инпута: ${this.endInput.value}`);

    this.filterRangePriceValues();
  }

  onEndInput(event) {
    event.preventDefault();

    // изменяем положение ползунка
    this.endPin.style.left = `${event.currentTarget.value / this.pinStep}px`;

    // задаем правую границу ползунку
    if (event.currentTarget.value > parseInt(this.maxInputValue)) {
      this.endPin.style.left = `${this.scaleLength}px`;
      event.currentTarget.value = parseInt(this.maxInputValue);
    }

    // перерисовываем цвет линии
    this.initialScale.style.marginRight = `${this.scaleLength - parseInt(this.endPin.style.left)}px`;

    // проверка на пересекаемость пинов
    if (parseInt(event.currentTarget.value) < parseInt(this.startInput.value) + this.pinWidth * this.pinStep) {
      this.endPin.style.left = `${this.startPin.offsetLeft + this.pinWidth}px`;
      event.currentTarget.value = parseInt(this.startInput.value) + this.pinWidth * this.pinStep;
    }

    console.log(`startInput.value при изменении правого инпута: ${this.startInput.value}`);
    console.log(`endInput.value при изменении правого инпута: ${this.endInput.value}`);

    this.filterRangePriceValues();
  }

  // функция для фильтрации массива в зависимости от выбранной цены диапазона
  filterRangePriceValues() {
    console.log(this.renderTemplate.templateArray);

    let resultFilterArray = this.renderTemplate.templateArray.filter(item => {
      return parseInt(item.price) > parseInt(this.startInput.value) && parseInt(item.price) < parseInt(this.endInput.value);
    });

    this.renderTemplate.templateArray = resultFilterArray;
    console.log(this.renderTemplate.templateArray);

    this.renderTemplate.render();
    this.renderTemplate.templateArray = null;
    this.renderTemplate.init();
  }
}

let rangeFilter = new RangeFilter();
rangeFilter.init();
