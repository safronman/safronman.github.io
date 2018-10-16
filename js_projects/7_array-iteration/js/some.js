// 4. Some
// Назначение Some:
// 1) служит для проверки массива.
// 2) метод Some возвращает true, когда хотя бы ОДИН элемент массива отвечают переданным условиям.

// Задача:
// Проверить есть ли в массиве хоть одно отрицательное число

let numberArray = [1, -4, 0, 23, -98, -87, 55];

// Cтандартный подход. Цикл For
let someNumberNegative = false;
for (let i = 0; i < numberArray.length; i++) {
  const element = numberArray[i];
  if (element < 0) {
    someNumberNegative = true;
    break;
  } 
}

// Метод some
let result = numberArray.some((item) => {
  return item < 0;
});

console.log(someNumberNegative);    // true
console.log(result);                // true