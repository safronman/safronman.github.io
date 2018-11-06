class RenderTemplate {
  constructor() {
    this.templateArray = null;
  }

  init() {
    this.templateArray = [{
        src: './img/template-1.jpg',
        title: 'Tesla car',
        desc: 'Анимированный лэндинг',
        grid: 'адаптивная',
        features: 'галерея',
        price: '2100'
      },
      {
        src: './img/template-2.jpg',
        title: 'Vapid',
        desc: 'Учебный веб-ресурс',
        grid: 'резиновая',
        features: 'преимущества',
        price: '5600'
      },
      {
        src: './img/template-3.jpg',
        title: 'We host',
        desc: 'Интернет-магазин модемов',
        grid: 'резиновая',
        features: 'корзина',
        price: '4700'
      },
      {
        src: './img/template-4.jpg',
        title: 'Elegant',
        desc: 'Посадочная бьюти страницы',
        grid: 'фиксированная',
        features: 'слайдер',
        price: '1200'
      },
      {
        src: './img/template-5.jpg',
        title: 'Brink',
        desc: 'Хоккейный новостной портал',
        grid: 'адаптивная',
        features: 'новости',
        price: '8300'
      },
      {
        src: './img/template-6.jpg',
        title: 'Roof',
        desc: 'Информационный сайт',
        grid: 'фиксированная',
        features: 'слайдер',
        price: '3300'
      }
    ]
  }

  render() {
    let templateContainer = document.querySelector('.template-items');

    templateContainer.innerHTML = '';

    this.templateArray.forEach(item => {
      templateContainer.innerHTML += `
      <div class="template-item">
        <div class="browser">
          <div class="browser-circle browser-circle-1"></div>
          <div class="browser-circle browser-circle-2"></div>
          <div class="browser-circle browser-circle-3"></div>
        </div>
        <img src='${item.src}' alt="${item.desc}" width="360" height="504">
        <div class="template-desc">
          <h2 class="template-title">${item.title}</h2>
          <p>${item.desc}</p>
          <ul>
            <li>Сетка: ${item.grid}</li>
            <li>Особенности: ${item.features}</li>
            <li>Стоимость: ${item.price} руб.</li>
          </ul>
          <button class="button template-button">В корзину</button>
        </div>`
    });
  }
};

this.renderTemplate = new RenderTemplate();
this.renderTemplate.init();
this.renderTemplate.render();


