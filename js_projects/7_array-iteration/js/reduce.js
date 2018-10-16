// 5. Reduce
// Назначение Reduce:
// 1) служит для для прохода по массиву с вычислением значения
// 2) метод Reduce пробегается по всему массиву и на выход выдаёт какое-то одно обобщённое значение. Это может быть как новый массив, так и простое значение примитив или объект...
// 3) Метод Reduce производит пошагавую аккумуляцию элементов массива.
// Метод Reduce проходит по массиву и обращает внимание не только на текущий элемент массива, но и на то, что было подсчитано до него

// Задача 1 :
// Подсчитать сумму элементов массива

let numberArray = [1, -4, 0, 23, -98, -87, 55];

// Cтандартный подход. Цикл For
// В роли аккумулятора, накпливающего значения выступает переменная sum
let sum = 0;
for (let i = 0; i < numberArray.length; i++) {
  const element = numberArray[i];
  sum += element;
}

// Метод reduce
// В роли аккумулятора, накпливающего знчения выступает параметр total
let sum2 = numberArray.reduce((total, item) => {
  // return total + item;
  total = total + item;
  return total;

}, 0);

console.log(sum);
console.log(sum2);


// // Задача 2 :
// // Подсчитать количество не пустых строк в массиве 

// let array = ['Minsk', 'Moscow', '', '', 'London', ''];

// let resultArray = array.reduce(function(total, item) {
//   if (item !== '') {
//     total++;
//   }
//   return total;
// }, 0);


// console.log(array);
// console.log(resultArray);



// // Задача 3 :
// // на выходе получаем новый массив, состоящий из людей, кто девочка и кому 18+ (но лучше эту задачу решать с помощью filter, но и так можно)

// let array = [{
//   age: 18,
//   sex: 'f',
//   name: 'Sveta'
// }, {
//   age: 17,
//   sex: 'f',
//   name: 'Sashka'
// }, {
//   age: 19,
//   sex: 'm',
//   name: 'Andrew'
// }];

// let resultArray = array.reduce(function(total, item) {
//   if (item.age >= 18 && item.sex === 'f') {
//     total.push(item)
//   } 
//   return total;
// }, []);


// console.log(array);
// console.log(resultArray);

