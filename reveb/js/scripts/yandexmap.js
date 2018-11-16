//создаем переменные "Карта" и "Метка"
ymaps.ready(init);
let myMap;
let myPlacemark;

//Инициализируем нашу карту, задав ей координаты, устанавливаем масштаб карты
function init() {
  myMap = new ymaps.Map("map", {
    center: [53.885476, 27.541555],
    zoom: 17,
  });

  //Пишем свойства для нашей метки
  myPlacemark = new ymaps.Placemark([53.884960, 27.541727], {
    hintContent: 'г. Минск, ул. Красивая, 4',
    balloonContent: ''
  }, {
    // Опции.
    // Необходимо указать данный тип макета. Показываем что это изображение.
    iconLayout: 'default#image',
    // Своё изображение иконки метки. Указываем путь до картинки
    iconImageHref: 'img/map-marker.png',
    // Размеры метки.
    iconImageSize: [231, 190],
    // Смещение левого верхнего угла иконки относительно её "ножки" (точки привязки).
    iconImageOffset: [-40, -198]
  });
  //Добавляем метку на карту + убираем скролл мышкой
  myMap.geoObjects.add(myPlacemark);
  myMap.behaviors.disable('scrollZoom');
}
