// UI 
class BasketView {
  constructor() {
    this.basket = new Basket();
  }

  // render HTML
  render() {
    var container = document.querySelector('.basket');
    container.innerHTML = `
    <div class="basket__products-wrapper">
      <select class="basket__products" name="products">
        <option value="apple">Apple</option>
        <option value="pear">Pear</option>
        <option value="orange">Orange</option>
      </select>
      <button class="basket__button  basket__button--add">add to basket</button>
      <button class="basket__button  basket__button--clear">clear basket</button>
      <button class="basket__button  basket__button--save">save basket</button>
    </div>
    <div class="first-property">
      <label class="text-label" for="name">name:</label>
      <input class="text-input  text-input--name" type="text" name="name" id="name" placeholder="Введите название продукта">
    </div>
    <div class="second-property">
      <label class="checkbox-label" for="iswinter">isWinter:</label>
      <input class="checkbox-input  checkbox-input--winter" type="checkbox" name="iswinter" id="iswinter">
    </div>
    <div class="basket__status"><span class="basket__product-title">Корзина пуста</span></div>`;

    var selectProduct = document.querySelector('.basket__products');
    selectProduct.addEventListener('change', this.renderProductProperties.bind(this));

    var addProductsButton = document.querySelector('.basket__button--add');
    addProductsButton.addEventListener('click', this.addProductToBasket.bind(this));

    var clearButton = document.querySelector('.basket__button--clear');
    clearButton.addEventListener('click', this.clearBasket.bind(this));

    var saveButton = document.querySelector('.basket__button--save');
    saveButton.addEventListener('click', this.saveBasket.bind(this));
  }

  // render products properties
  renderProductProperties() {
    var secondProperty = document.querySelector('.second-property');
    var selectProduct = document.querySelector('.basket__products');

    switch (selectProduct.value) {
      case 'apple':
        secondProperty.innerHTML = `
        <label class="checkbox-label" for="iswinter">isWinter:</label>
        <input class="checkbox-input  checkbox-input--winter" type="checkbox" name="iswinter" id="iswinter">`;
        break;

      case 'pear':
        secondProperty.innerHTML = `
        <label class="text-label" for="type">type:</label>
        <input class="text-input  text-input--type" type="text" name="type" id="type">`;
        break;

      case 'orange':
        secondProperty.innerHTML = `
        <label class="text-label" for="country">country:</label>
        <input class="text-input  text-input--country" type="text" name="country" id="country">`;
        break;
    }
  }

  // render basket status
  renderBasket() {
    var basketStatus = document.querySelector('.basket__status');
    basketStatus.innerHTML = "";
    var arrayApples = this.basket._apples;
    console.log(arrayApples);
    
    var arrayPears = this.basket._pears;
    var arrayOranges = this.basket._oranges;
    var applesHTML = [];
    var pearsHTML = [];
    var orangesHTML = [];
    var count = 0;

    arrayApples.forEach((item, i) => {
      applesHTML += ` 
      <ol>${i+1} яблоко 
        <li>Name: <b>${item.name}</b></li>
        <li>Is winter: <b>${item.isWinter}</b></li>
      </ol>`;
      count++;
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

    basketStatus.innerHTML = `
    <div><p class="basket__product-title">Корзина яблок: ${arrayApples.length} </p> ${applesHTML}</div>
    <div><p class="basket__product-title">Корзина груш: ${arrayPears.length} </p> ${pearsHTML}</div>
    <div><p class="basket__product-title">Корзина апельсинов: ${arrayOranges.length} </p> ${orangesHTML}</div>`;
  }

  addProductToBasket() {
    var selectProduct = document.querySelector('.basket__products');
    var propertyName = document.querySelector('.text-input--name');
    var name = propertyName.value;

    switch (selectProduct.value) {
      case 'apple':
        var propertyAppleIsWinter = document.querySelector('.checkbox-input--winter');
        var isWinter = propertyAppleIsWinter.checked;
        var apple = new Apple(name, isWinter);
        this.basket.addProducts(apple);
        this.renderBasket();
        break;

      case 'pear':
        var propertyPearType = document.querySelector('.text-input--type');
        var type = propertyPearType.value;
        var pear = new Pear(name, type);
        this.basket.addProducts(pear);
        this.renderBasket();
        break;

      case 'orange':
        var propertyOrangeCountry = document.querySelector('.text-input--country');
        var country = propertyOrangeCountry.value;
        var orange = new Orange(name, country);
        this.basket.addProducts(orange);
        this.renderBasket();
        break;
    }
  }

  clearBasket() {
    var basketStatus = document.querySelector('.basket__status');
    basketStatus.innerHTML = '<span class="basket__product-title">Корзина пуста</span>';
    this.basket.clearBasket();
  }

  saveBasket() {
    // onBasketSave дает callback BasketBll 
    this.basket.saveProducts(this.onBasketSave.bind(this));
  }

  onBasketSave() {
    window.alert('Продукты добавленные в корзину теперь хранятся в localStorage');
  }
}
