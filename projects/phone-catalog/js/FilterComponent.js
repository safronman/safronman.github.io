class FilterComponent {
  constructor(shopManager) {
    this.shopManager = shopManager;

    this.pinArea = null;
    this.scale = null;
    this.initialScale = null;
    this.startPin = null;
    this.endPin = null;
    this.startInput = null;
    this.endInput = null;
    this.productsBtn = null;

    this.filterCheckboxes = null;

    this.maxInputValue = 0;
    this.scaleLength = 0;
    this.pinStep = 0;
    this.pinWidth = 0;
  }

  render() {
    let filterContainer = document.querySelector('.filter');
    filterContainer.innerHTML = `
    <form  action="#" method="post">
      <fieldset class="price">
        <legend class="price__title">Стоимость:</legend>
        <div class="price__range-filter">
          <div class="price__range-control">
            <div class="price__scale">
              <div class="price__initial-scale"></div>
            </div>
            <div class="price__pin  price__pin--start"></div>
            <div class="price__pin  price__pin--end"></div>
          </div>
          <div class="price__input-control">
            от <input class="price__input  price__input--min" type="number" value="0">
            до <input class="price__input  price__input--max" type="number" value="3740">
          </div>
        </div>
      </fieldset>
      <fieldset class="producer">
        <legend class="producer__title">Производитель:</legend>
        <ul class="producer__list">
          <li class="producer__item">
            <input class="producer__checkbox-input" type="checkbox" name="apple-name" value="apple-value" id="apple" placeholder="apple">
            <label class="producer__checkbox-label" for="apple">Apple</label>
          </li>
          <li class="producer__item">
            <input class="producer__checkbox-input" type="checkbox" name="samsung-name" value="samsung-value" id="samsung" placeholder="samsung">
            <label class="producer__checkbox-label" for="samsung">Samsung</label>
          </li>
          <li class="producer__item">
            <input class="producer__checkbox-input" type="checkbox" name="xiaomi-name" value="xiaomi-value" id="xiaomi" placeholder="xiaomi">
            <label class="producer__checkbox-label" for="xiaomi">Xiaomi</label>
          </li>
          <li class="producer__item">
            <input class="producer__checkbox-input" type="checkbox" name="honor-name" value="honor-value" id="honor" placeholder="honor">
            <label class="producer__checkbox-label" for="honor">Honor</label>
          </li>
          <li class="producer__item">
            <input class="producer__checkbox-input" type="checkbox" name="huawei-name" value="huawei-value" id="huawei" placeholder="huawei">
            <label class="producer__checkbox-label" for="huawei">Huawei</label>
          </li>
        </ul>
      </fieldset>
      <button class="button  button--form" type="button">Показать все телефоны</button>
    </form> `
  }

  init() {
    this.pinArea = document.querySelector('.price__range-control');
    this.scale = document.querySelector('.price__scale');
    this.initialScale = document.querySelector('.price__initial-scale');
    this.startPin = document.querySelector('.price__pin--start');
    this.endPin = document.querySelector('.price__pin--end');
    this.startInput = document.querySelector('.price__input--min');
    this.endInput = document.querySelector('.price__input--max');
    this.productsBtn = document.querySelector('.button--form');

    this.filterCheckboxes = document.querySelectorAll('.producer__checkbox-input');

    this.maxInputValue = parseInt(this.endInput.value);
    this.scaleLength = 220;
    this.pinStep = this.maxInputValue / this.scaleLength;
    this.pinWidth = 20;

    // --------- Управление фильтром ползунками ---------
    this.startPin.addEventListener('mousedown', this.onStartPin.bind(this));
    this.endPin.addEventListener('mousedown', this.onEndPin.bind(this));

    // --------- Управление фильтром инпутами ---------
    this.startInput.addEventListener('change', this.onStartInput.bind(this));
    this.endInput.addEventListener('change', this.onEndInput.bind(this));

    // --------- Управление чекбоксами ---------
    this.filterCheckboxes.forEach(item => {
      item.addEventListener('click', this.onFilterCheckboxes.bind(this));
    })

    // --------- Управление кнопкой "показать всё" ---------
    this.productsBtn.addEventListener('click', this.onProductsBtn.bind(this));
  }

  onStartPin(event) {
    event.preventDefault();

    let startX = event.clientX;

    // Биндим функции, чтобы потом можно было отписаться от события (removeEventListener)
    let bindedOnMouseMove = onMouseMove.bind(this);
    let bindedOnMouseUp = onMouseUp.bind(this);

    this.pinArea.addEventListener('mousemove', bindedOnMouseMove);
    this.pinArea.addEventListener('mouseup', bindedOnMouseUp);

    // Функция, выполняющая при смещение ползунка
    function onMouseMove(event) {
      event.preventDefault();

      let shiftX = startX - event.clientX;

      // Перезаписываем стартовую координату после смещения ползунка
      startX = event.clientX;

      // Изменяем положение ползунка
      this.startPin.style.left = `${(this.startPin.offsetLeft - shiftX)}px`;

      // Записываем текущее значение в инпут
      this.startInput.value = parseInt(this.startPin.style.left) * this.pinStep;

      // Перерисовываем цвет линии
      this.initialScale.style.marginLeft = `${parseInt(this.startPin.style.left)}px`;

      // Задаем левую границу ползунку
      if (this.startPin.offsetLeft < 0) {
        bindedOnMouseUp();
        this.startPin.style.left = '0px';
        this.startInput.value = 0;
      }

      // Проверка на пересекаемость пинов
      if ((this.startPin.offsetLeft + this.pinWidth) > this.endPin.offsetLeft) {
        bindedOnMouseUp();
        this.startPin.style.left = `${(this.endPin.offsetLeft - this.pinWidth)}px`;
        this.startInput.value = parseInt(this.startPin.style.left) * this.pinStep;
      }
    }

    // Отписываемся от событий при поднятии мыши и передаем установленное значение в shopManger
    function onMouseUp() {
      this.pinArea.removeEventListener('mousemove', bindedOnMouseMove);
      this.pinArea.removeEventListener('mouseup', bindedOnMouseUp);

      this.shopManager.setPriceLeft(this.startInput.value);
    }
  }

  onEndPin(event) {
    event.preventDefault();

    let startX = event.clientX;

    // Биндим функции, чтобы потом можно было отписаться от события (removeEventListener)
    let bindedOnMouseMove = onMouseMove.bind(this);
    let bindedOnMouseUp = onMouseUp.bind(this);

    this.pinArea.addEventListener('mousemove', bindedOnMouseMove);
    this.pinArea.addEventListener('mouseup', bindedOnMouseUp);

    // Функция, выполняющая при смещение ползунка
    function onMouseMove(event) {
      event.preventDefault();
      let shiftX = startX - event.clientX;

      // Перезаписываем стартовую координату после смещения ползунка
      startX = event.clientX;

      // Изменяем положение ползунка
      this.endPin.style.left = `${(this.endPin.offsetLeft - shiftX)}px`;

      // Записываем текущее значение в инпут
      this.endInput.value = parseInt(this.endPin.style.left) * this.pinStep;

      // Перерисовываем цвет линии
      this.initialScale.style.marginRight = `${this.scaleLength - parseInt(this.endPin.style.left)}px`;

      // Задаем правую границу ползунку
      if (this.endPin.offsetLeft > this.scaleLength) {
        bindedOnMouseUp();
        this.endPin.style.left = `${this.scaleLength}px`;
        this.endInput.value = this.maxInputValue;
      }

      // Проверка на пересекаемость пинов
      if ((this.endPin.offsetLeft - this.pinWidth) < this.startPin.offsetLeft) {
        bindedOnMouseUp();
        this.endPin.style.left = `${(this.startPin.offsetLeft + this.pinWidth)}px`;
        this.endInput.value = parseInt(this.endPin.style.left) * this.pinStep;
      }
    }

    // Отписываемся от событий при поднятии мыши и передаем установленное значение в shopManger
    function onMouseUp() {
      this.pinArea.removeEventListener('mousemove', bindedOnMouseMove);
      this.pinArea.removeEventListener('mouseup', bindedOnMouseUp);

      this.shopManager.setPriceRight(this.endInput.value);
    }
  }

  onStartInput(event) {
    event.preventDefault();

    // Изменяем положение ползунка
    this.startPin.style.left = `${event.currentTarget.value / this.pinStep}px`;

    // Перерисовываем цвет линии
    this.initialScale.style.marginLeft = this.startPin.style.left;

    // Задаем левую границу ползунку
    if (event.currentTarget.value < 0) {
      this.startPin.style.left = '0px';
      event.currentTarget.value = 0;
    }

    // Проверка на пересекаемость пинов
    if (parseInt(event.currentTarget.value) + this.pinWidth * this.pinStep > parseInt(this.endInput.value)) {
      this.startPin.style.left = `${this.endPin.offsetLeft - this.pinWidth}px`;
      event.currentTarget.value = this.endInput.value - this.pinWidth * this.pinStep;
    }

    this.shopManager.setPriceLeft(this.startInput.value);
  }

  onEndInput(event) {
    event.preventDefault();

    // Изменяем положение ползунка
    this.endPin.style.left = `${event.currentTarget.value / this.pinStep}px`;

    // Перерисовываем цвет линии
    this.initialScale.style.marginRight = `${this.scaleLength - parseInt(this.endPin.style.left)}px`;

    // Задаем правую границу ползунку
    if (event.currentTarget.value > parseInt(this.maxInputValue)) {
      this.endPin.style.left = `${this.scaleLength}px`;
      event.currentTarget.value = parseInt(this.maxInputValue);
    }

    // Отписываемся от событий при поднятии мыши и передаем установленное значение в shopManger
    if (parseInt(event.currentTarget.value) < parseInt(this.startInput.value) + this.pinWidth * this.pinStep) {
      this.endPin.style.left = `${this.startPin.offsetLeft + this.pinWidth}px`;
      event.currentTarget.value = parseInt(this.startInput.value) + this.pinWidth * this.pinStep;
    }

    this.shopManager.setPriceRight(this.endInput.value);
  }

  onFilterCheckboxes(event) {
    if (event.currentTarget.checked) {
      this.shopManager.addFeature(event.currentTarget.placeholder);
    } else {
      this.shopManager.removeFeature(event.currentTarget.placeholder);
    }
  }

  onProductsBtn() {
    this.filterCheckboxes.forEach(item => {
      item.checked = false;
    })

    this.startPin.style.left = 0;
    this.initialScale.style.marginLeft = 0;
    this.startInput.value = 0;

    this.endPin.style.left = `220px`;
    this.initialScale.style.marginRight = 0;
    this.endInput.value = 3740;

    this.shopManager.showAlProducts();
  }
}
