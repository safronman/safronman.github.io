class TemplateSorter {
  constructor() {
    this.selectSort = null;
    this.activeSelect = null;

    this.renderTemplate = new RenderTemplate();
    this.renderTemplate.init();
  }

  init() {
    this.selectSort = document.querySelector('.select-templates');

    this.selectSort.addEventListener('change', () => {
      this.activeSelect = this.selectSort.options[this.selectSort.selectedIndex];

      switch (this.activeSelect.value) {
        case 'price-from-min':
          this.renderTemplate.templateArray.sort(this.sortNumbersFromMinToMax);
          this.renderTemplate.render();
          break;

        case 'price-from-max':
          this.renderTemplate.templateArray.sort(this.sortNumbersFromMaxToMin);
          this.renderTemplate.render();
          break;

        case 'name-from-min':
          this.renderTemplate.templateArray.sort(this.sortStringsFromFirstToLast);
          this.renderTemplate.render();
          break;

        case 'name-from-max':
          this.renderTemplate.templateArray.sort(this.sortStringsFromLastToFirst);
          this.renderTemplate.render();
          break;

        case 'random':
          this.shuffleArray(this.renderTemplate.templateArray);
          this.renderTemplate.render();
          break;
      }
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


let templateSorter = new TemplateSorter();
templateSorter.init();