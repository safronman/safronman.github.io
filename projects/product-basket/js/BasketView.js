class BasketView {
  constructor(basketBll) {
    this.basket = basketBll;

    this.selectProduct = null;
    this.addProductsButton = null;
    this.clearButton = null;
    this.saveButton = null;
    this.basketContent = null;
    this.productNameProperty = null;
  };

  render() {
    let container = document.querySelector('.basket');
    container.innerHTML = `
      <div class="basket__products-wrapper">
      <h2 class="basket__heading">Выберите продукт из списка</h2>
        <select class="basket__products" name="products">
          <option value="apple">Apple</option>
          <option value="pear">Pear</option>
          <option value="orange">Orange</option>
        </select>
      </div>

      <h2 class="basket__heading">Заполните необходимые поля</h2>
      <div class="first-property">
        <label class="text-label" for="name">Введите сорт: </label>
        <input class="text-input  text-input--name" type="text" name="name" id="name" placeholder="Введите сорт">
      </div>
      <div class="second-property">
        <label class="checkbox-label" for="iswinter">Отметьте галочкой относится ли яблоко к зимнему сорту? </label>
        <input class="checkbox-input  checkbox-input--winter" type="checkbox" name="iswinter" id="iswinter">
      </div>
      <div class="butons-wrapper">
        <button class="basket__button  basket__button--add">Добавить в корзину</button>
        <button class="basket__button  basket__button--save">Сохранить продукты в local storage</button>
        <button class="basket__button  basket__button--clear">Очистить корзину</button>
      </div>
      <div class="basket__status">
        <span class="basket__product-title">Корзина пуста. Добавьте элементы в корзину</span>
      </div>`;

    this.init();
  };

  init() {
    this.selectProduct = document.querySelector('.basket__products');
    this.addProductsButton = document.querySelector('.basket__button--add');
    this.clearButton = document.querySelector('.basket__button--clear');
    this.saveButton = document.querySelector('.basket__button--save');
    this.basketContent = document.querySelector('.basket__status');
    this.productNameProperty = document.querySelector('.text-input--name');

    this.selectProduct.addEventListener('change', this.renderSecondProductProperty.bind(this));
    this.addProductsButton.addEventListener('click', this.checkedFirstInput.bind(this));
    this.clearButton.addEventListener('click', this.clearBasket.bind(this));
    this.saveButton.addEventListener('click', this.saveBasket.bind(this));
  };

  renderSecondProductProperty() {
    let secondProperty = document.querySelector('.second-property');

    switch (this.selectProduct.value) {
      case 'apple':
        secondProperty.innerHTML = `
        <label class="checkbox-label" for="iswinter">Отметьте галочкой относится ли яблоко к зимнему сорту? </label>
        <input class="checkbox-input  checkbox-input--winter" type="checkbox" name="iswinter" id="iswinter" placeholder="Введите сорт">`;
        break;

      case 'pear':
        secondProperty.innerHTML = `
        <label class="text-label" for="type">Введите тип груши: </label>
        <input class="text-input  text-input--type" type="text" name="type" id="type" placeholder="Введите тип груши">`;
        break;

      case 'orange':
        secondProperty.innerHTML = `
        <label class="text-label" for="country">Введите страну производителя: </label>
        <input class="text-input  text-input--country" type="text" name="country" id="country" placeholder="Введите страну производителя">`;
        break;
    };
  };

  renderBasketContent() {
    this.basketContent.innerHTML = '';
    this.productNameProperty.value = '';

    let arrayApples = this.basket._apples;
    let arrayPears = this.basket._pears;
    let arrayOranges = this.basket._oranges;
    let applesHTML = [];
    let pearsHTML = [];
    let orangesHTML = [];

    arrayApples.forEach((item, i) => {
      applesHTML += ` 
      <ol>${i+1} яблоко 
        <li>Name: <b>${item.name}</b></li>
        <li>Is winter: <b>${item.isWinter}</b></li>
      </ol>`;
    });

    arrayPears.forEach((item, i) => {
      pearsHTML += ` 
      <ol>${i+1} груша
        <li>Name: <b>${item.name}</b></li>
        <li>Type: <b>${item.type}</b></li>
      </ol>`;
    });

    arrayOranges.forEach((item, i) => {
      orangesHTML += ` 
      <ol>${i+1} апельсин 
        <li>Name: <b>${item.name}</b></li>
        <li>Country: <b>${item.country}</b></li>
      </ol>`;
    });

    this.basketContent.innerHTML = `
      <div><p class="basket__product-title">Корзина яблок: ${arrayApples.length} </p> ${applesHTML}</div>
      <div><p class="basket__product-title">Корзина груш: ${arrayPears.length} </p> ${pearsHTML}</div>
      <div><p class="basket__product-title">Корзина апельсинов: ${arrayOranges.length} </p> ${orangesHTML}</div>`;
  };

  checkedFirstInput() {
    if (this.productNameProperty.value === '') {
      this.productNameProperty.classList.add('error');
    } else {
      this.productNameProperty.classList.remove('error');
      this.addProductToBasket();
    };
  };

  addProductToBasket() {
    switch (this.selectProduct.value) {
      case 'apple':
        let appleIsWinterProperty = document.querySelector('.checkbox-input--winter');
        let apple = new Apple(this.productNameProperty.value, appleIsWinterProperty.checked);
        this.basket.addProducts(apple);
        appleIsWinterProperty.checked = false;
        this.renderBasketContent();
        break;

      case 'pear':
        let pearTypeProperty = document.querySelector('.text-input--type');
        let pear = new Pear(this.productNameProperty.value, pearTypeProperty.value);

        if (pearTypeProperty.value === '') {
          pearTypeProperty.classList.add('error');
        } else {
          pearTypeProperty.classList.remove('error');
          this.basket.addProducts(pear);
          pearTypeProperty.value = '';
          this.renderBasketContent();
        };
        break;

      case 'orange':
        let orangeCountryProperty = document.querySelector('.text-input--country');
        let orange = new Orange(this.productNameProperty.value, orangeCountryProperty.value);

        if (orangeCountryProperty.value === '') {
          orangeCountryProperty.classList.add('error');
        } else {
          orangeCountryProperty.classList.remove('error');
          this.basket.addProducts(orange);
          orangeCountryProperty.value = '';
          this.renderBasketContent();
        };
        break;
    };
  };

  clearBasket() {
    this.basketContent.innerHTML = `
    <span class="basket__product-title">Корзина пуста. Добавьте элементы в корзину</span>`;
    this.basket.clearBasketBll();
  };

  saveBasket() {
    // onBasketSave дает callback BasketBll 
    this.basket.saveProducts(this.onBasketSave.bind(this));
  };

  onBasketSave() {
    window.alert('Продукты, добавленные в корзину, теперь хранятся в localStorage');
  };
};
