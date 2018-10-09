// 2. Прототипное наследование
// Прототипное наследование лучше функционального стиля, так как не дублирует методы в каждом объекте.

// --------- Класс-Родитель ------------
function Man(name, surname) {
  this.name = name;
  this.surname = surname;

  // Методы хранятся в прототипе
  Man.prototype.go = function () {
    console.log('i can go');
  }
}

// --------- Класс-потомок -----------
function Driver(name, surname) {
  // // 1. Метод call выполняет функцию на которой он был вызван с соответсвующим контекстом(this) и соответсвующими параметрами
  // Man.call(this, name, surname);

  // 2. Метод apply более универсальный метод, в котором не нужно задумываться какие и сколько аргуметов мы переданм в функцию
  Man.apply(this, arguments);

  this.expierence = 10;

  // // 1. Наследуем методы из родительского класса. 
  // // Не поддерживается в IE10-
  // Driver.prototype.__proto__ = Man.prototype;

  // 2. Наследуем методы из родительского класса
  Driver.prototype = Object.create(Man.prototype);
  // Сохраняем конструктор
  Driver.prototype.constructor = Driver;
}

// Переопределение метода
Driver.prototype.go = function () {
  // вызвать метод родителя, передав ему текущие аргументы
  Man.prototype.go.apply(this, arguments);
  console.log('go go go');
}

// Добавление своего метода
Driver.prototype.drive = function () {
  console.log('i can drive');
}


var man1 = new Man('Иван', 'Иванов');
console.log(man1);
man1.go();

var man2 = new Driver('Коля', 'Петров');
console.log(man2);
console.log(man2.expierence);
man2.go();
man2.drive();