class SortComponent {
  constructor(shopManager) {
    this.shopManager = shopManager;

    this.selectSort = null;
    this.activeSelect = null;
  }

  render() {
    let sortContainer = document.querySelector('.sort');
    sortContainer.innerHTML = `
    <b class="sort__title">Сортировать:</b>
      <select class="sort__select-templates" name="sort">
        <option class="sort-random" value="random">В случайном порядке</option>
        <option class="sort-price-from-min" value="price-from-min">По цене: начать с меньшей</option>
        <option class="sort-price-from-max" value="price-from-max">По цене: начать с большей</option>
        <option class="sort-name-from-min" value="name-from-min">По названию: от A до Z</option>
        <option class="sort-name-from-max" value="name-from-max">По названию: от Z до A</option>
      </select>`
  }

  init() {
    this.selectSort = document.querySelector('.sort__select-templates');

    this.selectSort.addEventListener('change', () => {
      this.activeSelect = this.selectSort.options[this.selectSort.selectedIndex];

      switch (this.activeSelect.value) {
        case 'price-from-min':
          this.shopManager.sortingProductsFromMinToMax();
          break;

        case 'price-from-max':
          this.shopManager.sortingProductsFromMaxToMin();
          break;

        case 'name-from-min':
          this.shopManager.sortingProductsFromAtoZ();
          break;

        case 'name-from-max':
          this.shopManager.sortingProductsFromZtoA();
          break;

        case 'random':
          this.shopManager.sortingProductsRandom();
          break;
      }
    })
  }
}
