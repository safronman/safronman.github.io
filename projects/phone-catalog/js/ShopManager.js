class ShopManager {
  constructor() {
    this.products = null;

    this.onDataChanged = null;
    this.onDataChangedInterval = null;

    this.filter = {
      price: {
        left: 0,
        right: 3740
      },
      producer: []
    }
  }

  // Инициализация продуктов
  init() {
    this.products = [{
        src: './img/phone-1.jpg',
        title: 'Samsung Galaxy S9',
        producer: 'samsung',
        price: 1450
      },
      {
        src: './img/phone-2.jpg',
        title: 'Apple iPhone SE',
        producer: 'apple',
        price: 630
      },
      {
        src: './img/phone-3.jpg',
        title: 'Xiaomi Mi 8',
        producer: 'xiaomi',
        price: 1288
      },
      {
        src: './img/phone-4.jpg',
        title: 'Apple iPhone XS Max',
        producer: 'apple',
        price: 3600
      },
      {
        src: './img/phone-5.jpg',
        title: 'Xiaomi Redmi Note 5A',
        producer: 'xiaomi',
        price: 228
      },
      {
        src: './img/phone-6.jpg',
        title: 'Honor 10',
        producer: 'honor',
        price: 845
      },
      {
        src: './img/phone-7.jpg',
        title: 'Samsung Galaxy A7',
        producer: 'samsung',
        price: 750
      },
      {
        src: './img/phone-8.jpg',
        title: 'Huawei Mate 20',
        producer: 'huawei',
        price: 2250
      },
      {
        src: './img/phone-9.jpg',
        title: 'Apple iPhone 7',
        producer: 'apple',
        price: 1215
      }
    ]
  }

  getProducts() {
    // Фильтрация по цене
    let filteredProducts = this.products.filter(item => {
      return item.price > this.filter.price.left && item.price < this.filter.price.right;
    });

    // Фильтрация по чекбоксам
    if (this.filter.producer.length !== 0) {
      filteredProducts = filteredProducts.filter(item => {
        return this.filter.producer.includes(item.producer);
      })
    }

    return filteredProducts;
  }


  // Логика взаимодействия с чекбоксами
  addFeature(el) {
    this.filter.producer.push(el);
    this.dispatchEvent();
  }

  removeFeature(el) {
    // Фильтрация и возвращение текущего массива
    for (let i = 0; i < this.filter.producer.length; i++) {
      if (this.filter.producer[i] === el) {
        this.filter.producer.splice(i--, 1);
      }
    }
    this.dispatchEvent();
  }


  // Логика фильтрации продуктов при взаимодействии с ползунком и инпутами 
  setPriceLeft(newValue) {
    this.filter.price.left = parseInt(newValue);
    this.dispatchEvent();
  }

  setPriceRight(newValue) {
    this.filter.price.right = parseInt(newValue);
    this.dispatchEvent();
  }


  //  Логика сортировки продуктов при взаимодействии с селектом 
  sortingProductsFromMinToMax() {
    // обращаемся к массиву продуктов и сортируем их
    this.products.sort(this._sortNumbersFromMinToMax);

    // вызываем callback и перерисовываем продукты
    this.dispatchEvent();
  }

  sortingProductsFromMaxToMin() {
    this.products.sort(this._sortNumbersFromMaxToMin);
    this.dispatchEvent();
  }

  sortingProductsFromAtoZ() {
    this.products.sort(this._sortStringsFromFirstToLast);
    this.dispatchEvent();
  }

  sortingProductsFromZtoA() {
    this.products.sort(this._sortStringsFromLastToFirst);
    this.dispatchEvent();
  }

  sortingProductsRandom() {
    this._shuffleArray(this.products);
    this.dispatchEvent();
  }

  _sortNumbersFromMinToMax(object1, object2) {
    let num1 = object1.price;
    let num2 = object2.price;
    if (num1 > num2) return 1;
    if (num1 < num2) return -1;
  }

  _sortNumbersFromMaxToMin(object1, object2) {
    let num1 = object1.price;
    let num2 = object2.price;
    if (num1 < num2) return 1;
    if (num1 > num2) return -1;
  }

  _sortStringsFromFirstToLast(object1, object2) {
    let string1 = object1.title;
    let string2 = object2.title;
    if (string1 > string2) return 1;
    if (string1 < string2) return -1;
  }

  _sortStringsFromLastToFirst(object1, object2) {
    let string1 = object1.title;
    let string2 = object2.title;
    if (string1 < string2) return 1;
    if (string1 > string2) return -1;
  }

  _shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }


  // Логика при взаимодействии с кнопкой "показать всё"
  showAlProducts() {
    this.filter.producer = [];
    this.filter.price.left = 0;
    this.filter.price.right = 3740;
    this.checkedProducts = [];
    this.resultCheckedProducts = [];
    this.init();
    this.dispatchEvent();
  }


  // Callback
  dispatchEvent() {
    if (!!this.onDataChanged) {
      clearTimeout(this.onDataChangedInterval);
      this.onDataChangedInterval = setTimeout(this.onDataChanged.bind(this), 300);
    }
  }
}
