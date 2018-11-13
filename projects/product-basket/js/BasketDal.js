// DAL
class LocalStorageService {
  constructor() {}

  save(apples, pears, oranges, callbackDal) {
    // JSON.stringify преобразует ('сериализует') значение JavaScript в строку JSON
    var serializedApples = JSON.stringify(apples);
    var serializedPears = JSON.stringify(pears);
    var serializedOranges = JSON.stringify(oranges);

    // Метод setItem добавляет в localStorage новый ключ со значением
    // localStorage.setItem('ключ', 'значение')
    localStorage.setItem('apples', serializedApples);
    localStorage.setItem('pears', serializedPears);
    localStorage.setItem('oranges', serializedOranges);
    callbackDal();
  }
}
