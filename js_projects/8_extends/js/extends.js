// 1. Функциональное наследование.

// --------- Класс-Родитель ------------
function Man(name, surname) {

  this.name = name;
  this.surname = surname;

  this.go = function () {
    console.log('i can go');
  }

  this.eat = function () {
    console.log('i can eat');
  }
}

// --------- Класс-потомок -----------
function Driver(name, surname) {
  // Добавление своего св-ва
  this.expierence = 10;
  
  // Функциональное наследование
  // Мы обращаемся к родительской функции-констуктору Man
  // передавая текущий контекст и массив параметров arguments
  // Мы подменяем контекст класса Man, контекстом класса Driver
  Man.apply(this, arguments);

  // Переопределение метода
  this.go = function () {
    console.log('i can go');
    console.log('go go go');
  }

  // Добавление своего метода
  this.drive = function () {
    console.log('i can drive');;
  }
}

var man1 = new Man('Иван', 'Иванов');
console.log(man1);
man1.go();

var man2 = new Driver('Коля', 'Петров');
console.log(man2);
console.log(man2.expierence);
man2.go();
man2.drive();
man2.eat();