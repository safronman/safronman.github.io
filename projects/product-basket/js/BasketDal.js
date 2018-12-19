class BasketDal {
  save(apples, pears, oranges, callbackDal) {
    // JSON.stringify преобразует ('сериализует') значение JavaScript в строку JSON
    let serializedApples = JSON.stringify(apples);
    let serializedPears = JSON.stringify(pears);
    let serializedOranges = JSON.stringify(oranges);

    // Метод setItem добавляет в localStorage новый ключ со значением
    // localStorage.setItem('ключ', 'значение')
    localStorage.setItem('apples', serializedApples);
    localStorage.setItem('pears', serializedPears);
    localStorage.setItem('oranges', serializedOranges);
    callbackDal();
  };

  clearBasketLocalStorage() {
    localStorage.clear();
  } 
};
