class TemplateSorter {
  constructor(tempArray) {
    this.selectSort = null;
    this.activeSelect = null;

    this.templateContainer = null;
    this.templateArray = tempArray;
  }

  init() {
    this.selectSort = document.querySelector('.select-templates');

    this.selectSort.addEventListener('change', () => {
      this.activeSelect = this.selectSort.options[this.selectSort.selectedIndex];

      switch (this.activeSelect.value) {
        case 'price-from-min':
          this.templateArray.sort(this.sortNumbersFromMinToMax);
          this.render();
          break;

        case 'price-from-max':
          this.templateArray.sort(this.sortNumbersFromMaxToMin);
          this.render();
          break;

        case 'name-from-min':
          this.templateArray.sort(this.sortStringsFromFirstToLast);
          this.render();
          break;

        case 'name-from-max':
          this.templateArray.sort(this.sortStringsFromLastToFirst);
          this.render();
          break;

        case 'random':
          this.shuffleArray(this.templateArray);
          this.render();
          break;
      }
    });
  }

  render() {
    this.templateContainer = document.querySelector('.template-items');

    this.templateContainer.innerHTML = '';

    this.templateArray.forEach(item => {
      this.templateContainer.innerHTML += `
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
          <a class="button template-price" href="#">${item.price} руб.</a>
        </div>`
    });
  }

  sortNumbersFromMaxToMin(object1, object2) {
    let num1 = Number(object1.price);
    let num2 = Number(object2.price);
    if (num1 < num2) return 1;
    if (num1 > num2) return -1;
  }

  sortNumbersFromMinToMax(object1, object2) {
    let num1 = Number(object1.price);
    let num2 = Number(object2.price);
    if (num1 > num2) return 1;
    if (num1 < num2) return -1;
  }

  sortStringsFromLastToFirst(object1, object2) {
    let string1 = object1.title;
    let string2 = object2.title;
    if (string1 < string2) return 1;
    if (string1 > string2) return -1;
  }

  sortStringsFromFirstToLast(object1, object2) {
    let string1 = object1.title;
    let string2 = object2.title;
    if (string1 > string2) return 1;
    if (string1 < string2) return -1;
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}
