class FilterComponent {
  constructor() {
  }

  render() {
    let filterContainer = document.querySelector('.filter');
    filterContainer.innerHTML = `
    <form class="" action="index.html" method="post">

        <fieldset>
          <legend class="price">Стоимость:</legend>
          <div class="range-filter">
            <div class="range-control">
              <div class="scale">
                <div class="initial-scale"></div>
              </div>
              <div class="pin pin-start"></div>
              <div class="pin pin-end"></div>
            </div>
            <div class="price-control">
              от <input class="min-price" type="number" value="0">
              до <input class="max-price" type="number" value="9000">
            </div>
          </div>
        </fieldset>

        <button class="button  button--del-padding  form-button" type="button">Показать все шаблоны</button>

        <fieldset>
          <legend class="grid">Сетка:</legend>
          <ul>
            <li>
              <input type="radio" name="grid" value="adaptive-field" id="adaptive" checked>
              <label class="radio-label" for="adaptive">Адаптивная</label>
            </li>
            <li>
              <input type="radio" name="grid" value="fixed-field" id="fixed">
              <label class="radio-label" for="fixed">Фиксированная</label>
            </li>
            <li>
              <input type="radio" name="grid" value="rubber-field" id="rubber">
              <label class="radio-label" for="rubber">Резиновая</label>
            </li>
          </ul>
        </fieldset>
        <fieldset class="details-container">
          <legend class="details">Особенности:</legend>
          <ul>
            <li>
              <input type="checkbox" name="slider-name" value="slider-field" id="slider" checked>
              <label for="slider">Слайдер</label>
            </li>
            <li>
              <input type="checkbox" name="advantage-name" value="advantage-field" id="advantage">
              <label for="advantage">Преимущества</label></li>
            <li>
              <input type="checkbox" name="news-name" value="news-field" id="news" checked>
              <label for="news">Новости</label>
            </li>
            <li>
              <input type="checkbox" name="gallery-name" value="gallery-field" id="gallery">
              <label for="gallery">Галерея</label>
            </li>
            <li>
              <input type="checkbox" name="basket-name" value="basket-field" id="basket">
              <label for="basket">Корзина</label>
            </li>
          </ul>
        </fieldset>
        <button class="button form-button" type="submit" name="form-button">Показать</button>
      </form>
    `;
  }
}

let filterComponent = new FilterComponent();
filterComponent.render(); 