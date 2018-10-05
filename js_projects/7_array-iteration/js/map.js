// 2. Map
// Назначение Map:
// служит для переработки элементов массива.
// К какому массиву метод map мы применим, такой же ДЛИННЫ массив мы и получим

// Задача:
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

console.log(numberArray);
console.log(resultArray1);
console.log(resultArray2);
