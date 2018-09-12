// Объект view обновляет изображения маркерами попадания или промаха, а также выводит сообщения для пользователя
var view = {
  displayMessage: function (message) {
    var messageForUser = document.querySelector('.battleship__message');
    messageForUser.innerHTML = message;
  },

  displayHit: function (location) {
    var cell = document.getElementById(location);
    cell.classList.add('hit');
  },

  displayMiss: function (location) {
    var cell = document.getElementById(location);
    cell.classList.add('miss');
  }
};


// Объект model следит за кораблями: где они находятся, попали ли в них и не утонули ли подстреленные корабли
var model = {
  boardSize: 7,
  numShips: 3,
  shipLength: 3,
  shipsSunk: 0,

  ships: [
    { locations: [0, 0, 0], hits: ['', '', ''] },
    { locations: [0, 0, 0], hits: ['', '', ''] },
    { locations: [0, 0, 0], hits: ['', '', ''] }
  ],

  fire: function (guess) {
    for (let i = 0; i < this.numShips; i++) {
      var ship = this.ships[i];
      // indexOf ищет в массиве указанное значение (guess) и возвращает его индекс
      // Если указанное значение в массиве отсутсвует, то возвращает - 1
      //поэтому делаем проверку   if (index >= 0)
      var index = ship.locations.indexOf(guess);  
      if (index >= 0) {
        ship.hits[index] = 'hit';
        view.displayHit(guess);
        view.displayMessage('Вы попали');

        if (this.isSunk(ship)) {
          view.displayMessage('Вы потапили мой корабль!');
          this.shipsSunk++;
        }

        return true;
      }
    }
    view.displayMiss(guess);
    view.displayMessage('Вы промахнулись');
    return false;
  },

  isSunk: function (ship) {
    for (let i = 0; i < this.shipLength; i++) {
      // Проверяем каждый элемент массива на наличие попадания (отметки hit)
      if (ship.hits[i] !== 'hit')  {
        return false;
      }
    }
    return true;
  },

  generateShipLocations: function () {
    var locations;
    for (let i = 0; i < this.numShips; i++) {
      do {
        locations = this.generateShip();
      } while (this.collision(locations));
      this.ships[i].locations = locations;
    }
  },

  generateShip: function () {
    var direction = Math.floor(Math.random() * 2);
    var row, col;

    // задаем начальную позицию для корабля в горизонтальном направлении
    if (direction === 1) {
      row = Math.floor(Math.random() * this.boardSize);
      // чтобы горизонтально расположенный корабль влез в поле
      // ограничываем его начальную позицию до длины корабля
      col = Math.floor(Math.random() * (this.boardSize - this.shipLength));
    } else {
      // аналогично ограничиваем начальную позицию для вертикально
      // расположенного корабля
      row = Math.floor(Math.random() * (this.boardSize - this.shipLength));
      col = Math.floor(Math.random() * this.boardSize);
    }

    var newShipLocations = [];

    for (let i = 0; i < this.shipLength; i++) {
      if (direction === 1) {
        newShipLocations.push(row + '' + (col + i));
      } else {
        newShipLocations.push((row + i) + '' + col);
      }
    }
    return newShipLocations;
  },

  collision: function (locations) {
    for (let i = 0; i < this.numShips; i++) {
      var ship = model.ships[i];

      for (let j = 0; j < locations.length; j++) {
        if (ship.locations.indexOf(locations[j]) >= 0) {
          return true;
        }
      }
    }
    return false;
  }
};


// Объект controller связывает полученные данные от пользователя и выполняет игровую логику
var controller = {
  guesses: 0,

  processGuess: function (guess) {
    var location = parseGuess(guess);
    if (location) {
      this.guesses++;
      var hit = model.fire(location);
      if (hit && model.shipsSunk === model.numShips) {
        view.displayMessage('Поздравляем. Вы потапили все корабли за ' + this.guesses + ' попыток.')
      }
    }
  }
};

function parseGuess(guess) {
  var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  
  if (guess === null || guess.length !==2) {
    window.alert('Ошибка! \nНеверный формат ввода данных! \nВведите первое значение ячейки с большой буквы от A до ' + alphabet[alphabet.length - 1] + '.' + '\nВведите второе значение ячейки от 0 до ' + (alphabet.length - 1) + '\nПример: A0');

  } else {
    // метод charAt возвращает строку с одним символом, находящимся в данной позиции
    firstChar = guess.charAt(0);
    // метод indexOf возвращает цифру, соответсвующую букве из массива alphabet
    var row = alphabet.indexOf(firstChar);

    var column = guess.charAt(1);
    if (isNaN(row) || isNaN(column)) {
      window.alert('Ошибка! \nНеверный формат ввода данных! \nВведите первое значение ячейки с большой буквы от A до ' + alphabet[alphabet.length - 1] + '.' + '\nВведите второе значение ячейки от 0 до ' + (alphabet.length - 1) + '\nПример: A0');
    } else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
      window.alert('Ошибка! \nНеверный формат ввода данных! \nВведите первое значение ячейки с большой буквы от A до ' + alphabet[alphabet.length - 1] + '.' + '\nВведите второе значение ячейки от 0 до ' + (alphabet.length - 1) + '\nПример: A0');
    } else {
      return row + column;
    }
  }
  return null;
};

// браузер будет выполнять init при полной загрузке страницы
window.onload = init;

function init() {
  // event on button click
  var fireButton = document.querySelector('.battleship__button');
  fireButton.addEventListener('click', pressFireButton);

  // event on keypress Enter
  var guessInput = document.querySelector('.battleship__input');
  guessInput.addEventListener('keypress', pressEnter);

  // place the ships on the game board
  model.generateShipLocations();
};

function pressFireButton() {
  var guessInput = document.querySelector('.battleship__input');
  // переводим значение в верхний регистр
  var guess = guessInput.value.toUpperCase();
  // передаем полученное значение в processGuess
  controller.processGuess(guess);
  // обнуляем после каждого выстрела
  guessInput.value = "";
};

function pressEnter(event) {
  var fireButton = document.querySelector('.battleship__button');
  if (event.keyCode === 13) {
    fireButton.click();
    return false;
  }
};
