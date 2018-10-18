// 3. Прототипное наследование. Синтаксис ES6

// --------- Класс-Родитель ------------
class Man {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  go() {
    console.log('i can go');
  }
}

// --------- Класс-потомок -----------
class Driver extends Man {
  constructor(name, surname) {
    // метод super означает выполнить все, что написано в родителе и выполнять код далее
    super(name, surname);

    this.expierence = 10;
  }

  // Переопределение метода
  go() {
    super.go();
    console.log('go go go go');
  }

  // Добавление своего метода
  drive() {
    console.log('i can drive');
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
 