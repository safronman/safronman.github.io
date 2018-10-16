// 2. Map
// Map возвращает НОВЫЙ массив.
// Назначение Map:
// 1) служит для трансформации массива в массив.
// 2) map нужен, чтобы из данного массива, получить новый массив ТОЙ ЖЕ длины, который сожержит "новые" элементы, полученные на основе данного массива

// Задача 1:
// Перевести все элементы массива в числовое значение

let numberArray = ['1', '-4', '0', '23', '-98', '-87', '55'];

// Cтандартный подход. Цикл For
let resultArray1 = [];
for (let i = 0; i < numberArray.length; i++) {
  const element = numberArray[i];
  resultArray1.push(parseInt(element));
}

// Метод map
let resultArray2 = numberArray.map((item) => {
  return parseInt(item);
});

console.log(numberArray);   // ["1", "-4", "0", "23", "-98", "-87", "55"]
console.log(resultArray1);  // [1, -4, 0, 23, -98, -87, 55]
console.log(resultArray2);  // [1, -4, 0, 23, -98, -87, 55]



// // Задача 2:
// // Из массива чисел получаем массив объектов, с полями: age и adult: true\false в зависимости от того, возраст >= 18 или нет

// let array = [18, 20, 12];

// let resultArray = array.map(function (item) {
//   if (item >= 18) {
//     return {
//       item: item,
//       adult: true
//     }
//   } else {
//     return {
//       item: item,
//       adult: false
//     }
//   }
// });

// console.log(array);
// console.log(resultArray);
