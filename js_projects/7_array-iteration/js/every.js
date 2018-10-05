// 3. Every
// Метод Every возвращает true, когда ВСЕ элементы массива отвечают данным условиям.

// Задача:
// Проверить все ли числа в массиве положительные

let numberArray = [1, -4, 0, 23, -98, -87, 55];

// Cтандартный подход. Цикл For
let allNumbersPositive = true;
for (let i = 0; i < numberArray.length; i++) {
  const element = numberArray[i];
  if (element < 0) {
    allNumbersPositive = false;
    break;
  } 
}

// Метод every
let result = numberArray.every((item) => {
  return item >= 0;
});

console.log(allNumbersPositive);
console.log(result);


