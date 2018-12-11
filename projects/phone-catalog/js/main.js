let shopManager = new ShopManager();
shopManager.init();

shopManager.onDataChanged = () => {
  productComponent.render();
}


let productComponent = new ProductComponent(shopManager);
productComponent.render();


let sortComponent = new SortComponent(shopManager);
sortComponent.render();
sortComponent.init();


let filterComponent = new FilterComponent(shopManager);
filterComponent.render();
filterComponent.init();
