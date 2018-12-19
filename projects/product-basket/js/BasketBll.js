class BasketBll {
  constructor(basketDal) {
    this._apples = [];
    this._pears = [];
    this._oranges = [];
    this._basketDal = basketDal;
  };

  addProducts(product) {
    switch (product.constructor.name) {
      case 'Apple':
        this._apples.push(product);
        break;

      case 'Pear':
        this._pears.push(product);
        break;

      case 'Orange':
        this._oranges.push(product);
        break;
    };
  };

  clearBasketBll() {
    this._apples = [];
    this._pears = [];
    this._oranges = [];
    this._basketDal.clearBasketLocalStorage();
  };

  saveProducts(callback) {
    // callback от BasketView передаем BasketDal
    this._basketDal.save(this._apples, this._pears, this._oranges, callback);
  };
}
