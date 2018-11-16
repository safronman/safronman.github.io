class SortComponent {
  constructor() {
    this.selectSort = null;
    this.activeSelect = null;
  }

  render() {
    let sortContainer = document.querySelector('.sort');
    sortContainer.innerHTML = `
    <b class="sort-title">Сортировать:</b>
      <select class="select-templates" name="sort">
        <option class="sort-random" value="random">В случайном порядке</option>
        <option class="sort-price-from-min" value="price-from-min">По цене: начать с меньшей</option>
        <option class="sort-price-from-max" value="price-from-max">По цене: начать с большей</option>
        <option class="sort-name-from-min" value="name-from-min">По названию: от A до Z</option>
        <option class="sort-name-from-max" value="name-from-max">По названию: от Z до A</option>
      </select>`
  }

  init() {
    this.selectSort = document.querySelector('.select-templates');

    this.selectSort.addEventListener('change', () => {
      this.activeSelect = this.selectSort.options[this.selectSort.selectedIndex];

      switch (this.activeSelect.value) {
        case 'price-from-min':
          console.log('1');

          // this.renderTemplate.templateArray.sort(this.sortNumbersFromMinToMax);
          // this.renderTemplate.render();
          break;

        case 'price-from-max':
          console.log('2');
          // this.renderTemplate.templateArray.sort(this.sortNumbersFromMaxToMin);
          // this.renderTemplate.render();
          break;

        case 'name-from-min':
          console.log('3');
          // this.renderTemplate.templateArray.sort(this.sortStringsFromFirstToLast);
          // this.renderTemplate.render();
          break;

        case 'name-from-max':
          console.log('4');
          // this.renderTemplate.templateArray.sort(this.sortStringsFromLastToFirst);
          // this.renderTemplate.render();
          break;

        case 'random':
          console.log('5');
          // this.shuffleArray(this.renderTemplate.templateArray);
          // this.renderTemplate.render();
          break;
      }
    })
  }
}

let sortComponent = new SortComponent();
sortComponent.render();
sortComponent.init();