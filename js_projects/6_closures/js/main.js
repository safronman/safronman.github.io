// 1. Замыкания, это функция объявленная внутри функции, благодаря которой локальные переменные внутри старшей функции не сбрасываются после завершения работы этой функции, а остаются при повторном вызове.
// Замыканиями они называются потому, что младшая функция их замыкает внутри старшей.


// 2. Замыкание - это функция, которая имеет доступ к переменным, объявленным вне данной функции.

function makeCounter() {
  let currentCount = 0;

  // возвращаемая функция замкнута на переменной currentCount
  return function () {
    currentCount++;
    return currentCount;
  }
};


// вывод данных в консоль
var counter1 = makeCounter();
var counter2 = makeCounter();

console.log(counter1());
console.log(counter1());
console.log(counter1());

console.log(counter2());
console.log(counter2());
console.log(counter2());


// вывод данных путем добаления события клик на кнопки
var counter3 = makeCounter();
var counter4 = makeCounter();

var button1 = document.querySelector('.button1');
var button2 = document.querySelector('.button2');
var value1 = document.querySelector('.value1');
var value2 = document.querySelector('.value2');

button1.addEventListener('click', function () {
  value1.innerHTML = counter3();
});

button2.addEventListener('click', function () {
  value2.innerHTML = counter4();
});


// 2 пример
// Замыкание - функция, которая ссылается на переменные объявленные вне данной функции

// function makeGreeting() {
//   let myName = 'Ivan';

//   function greeting(personName) {
//     return `Hello ${personName}! My name is ${myName}`;
//   } 

//   return greeting;
// }

// let newGreeting = makeGreeting();
// console.log(newGreeting('John'));
