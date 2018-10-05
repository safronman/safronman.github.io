// 1. Filter
// Назначение Filter:
// пробежаться по всему массиву и выбрать те элементы,
// которые подпадают под назначенный нами критерий  

// Задача:
// Перебрать массив чисел и вывести все отрицательные числа в другой массив

let numberArray = [1, -4, 0, 23, -98, -87, 55];

//Cтандартный подход. Цикл For
let resultArray1 = [];
for (let i = 0; i < numberArray.length; i++) {
  const element = numberArray[i];
  if (element < 0) {
    resultArray1.push(element);
  }
};

// Метод filter
let resultArray2 = numberArray.filter((item) => {
  return item < 0;
});

console.log(numberArray);
console.log(resultArray1);
console.log(resultArray2);

