class ProductComponent {
  constructor(shopManager) {
    this.shopManager = shopManager;
  }

  render() {
    let templateContainer = document.querySelector('.template__items');
    templateContainer.innerHTML = '';

    this.shopManager.getProducts().forEach(item => {
      templateContainer.innerHTML += `
      <div class="template__item">
        <div class="browser">
          <div class="browser-circle browser-circle-1"></div>
          <div class="browser-circle browser-circle-2"></div>
          <div class="browser-circle browser-circle-3"></div>
        </div>
        <img src='${item.src}' alt="${item.desc}" width="360" height="504">
        <div class="template__content">
          <h2 class="template__title">${item.title}</h2>
          <ul>
            <li>Производитель: ${item.producer}</li>
            <li>Стоимость: ${item.price} руб.</li>
          </ul>
          <button class="button button--template">В корзину</button>
        </div>`
    })
  }
}
