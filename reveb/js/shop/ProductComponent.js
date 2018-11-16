class ProductComponent {
  constructor() {

  }

  render() {
    let templateContainer = document.querySelector('.template-items');

    templateContainer.innerHTML = `
    <b>На этом месте будут карточки товаров </b>`;

    // this.templateArray.forEach(item => {
    //   templateContainer.innerHTML += `
    //   <div class="template-item">
    //     <div class="browser">
    //       <div class="browser-circle browser-circle-1"></div>
    //       <div class="browser-circle browser-circle-2"></div>
    //       <div class="browser-circle browser-circle-3"></div>
    //     </div>
    //     <img src='${item.src}' alt="${item.desc}" width="360" height="504">
    //     <div class="template-desc">
    //       <h2 class="template-title">${item.title}</h2>
    //       <p>${item.desc}</p>
    //       <ul>
    //         <li>Сетка: ${item.grid}</li>
    //         <li>Особенности: ${item.features}</li>
    //         <li>Стоимость: ${item.price} руб.</li>
    //       </ul>
    //       <button class="button template-button">В корзину</button>
    //     </div>`
    // })
  }
}

let productComponent = new ProductComponent();
productComponent.render(); 