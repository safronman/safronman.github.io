// Типы данных
// 1. Примитивные типы данных

// 1. string
var test1 = 'abc';
console.log(test1);
console.log(typeof test1);

// 2. number
// Nan и Infinity относятся к number (примеры указаны ниже по коду) 
var test2 = 1;
console.log(test2);
console.log(typeof test2);

// 3. boolean 
var test3 = true;
console.log(test3);
console.log(typeof test3);

// 4. Undefined - используется в случае неицилизированных переменных,
// отсутствующих свойств объектов или отсутсвующих значений в массивах
var test4;
console.log(test4);
console.log(typeof test4);

// 5. Null чаще всего используется там, где объект еще не не создан или не найден
// Результат typeof null == "object" – это официально признанная ошибка в языке, которая сохраняется для совместимости. На самом деле null – это не объект, а отдельный тип данных.
var test5 = null;
console.log(test5);
console.log(typeof test5);


// 6. NaN Чиcло не имеющее представления
// NaN относится к number
// NaN != NaN
var test6_1 = 0/0;
var test6_2 = 'food' * 3;
var test6_3 = Math.sqrt(-81);
console.log(test6_1);
console.log(test6_2);
console.log(test6_3);
console.log(typeof test6_1);

// Для проверки числа на NaN испоьзуется функция isNaN
myNum = Math.sqrt(-81);

if (isNaN(myNum)) {
  console.log('Result is NaN');
} else {
  console.log('Result is not a NaN');
}

// 7. Infinity – особенное численное значение, которое ведет себя в точности как математическая бесконечность ∞.
var test7_1 = 6/0;
var test7_2 = -6/0;
console.log(test7_1);
console.log(test7_2);
console.log(typeof test7_1);
