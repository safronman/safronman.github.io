// BLL
class Basket {
  constructor() {
    this._apples = [];
    this._pears = [];
    this._oranges = [];
    this._basketDal = new LocalStorageService();
  }

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
    }
  }

  clearBasket() {
    this._apples = [];
    this._pears = [];
    this._oranges = [];
  }

  saveProducts(callback) {
    // callback от BasketView передаем BasketDal
    this._basketDal.save(this._apples, this._pears, this._oranges, callback);
  }
}
