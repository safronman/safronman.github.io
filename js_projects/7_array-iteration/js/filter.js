// 1. Filter
// Filter возвращает НОВЫЙ массив.
// Назначение Filter:
// 1) для фильтрации массива
// 2) пробежаться по всему массиву и выбрать те элементы, которые подпадают под назначенный нами критерий  

// Задача 1:
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



// // Задача 2:
// // Вывести в результирующий массив не пустые строки

// let array = ['Minsk', 'Moscow', '', '', 'London', ''];

// let resultArray = array.filter(function(item) {
//   return item !== '';
// })

// console.log(array);
// console.log(resultArray);



// // Задача 3:
// // Пропускаем на вечеринку только тех, кто девочка и кому 18+

// let array = [{
//     age: 18,
//     sex: 'f',
//     name: 'Sveta'
//   },
//   {
//     age: 17,
//     sex: 'f',
//     name: 'Sashka'
//   },
//   {
//     age: 19,
//     sex: 'm',
//     name: 'Andrew'
//   }
// ]

// let resultArray = array.filter(function(item) {
//   return item.age >= 18 && item.sex === 'f'; 
// })

// console.log(array);
// console.log(resultArray);

