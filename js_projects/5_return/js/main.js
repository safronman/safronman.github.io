// Команда return говорит функции:
// прекрати выполнять то, что у тебя находиться внутри
// и возврати то, что передано в return наружу (т.е. наружу из функции).
// Это значит, что результат работы функции можно записать в переменную
// и использовать в коде в дальнейшем

function getSum(number1, number2) {
  let sum = number1 + number2;
  return sum;
};

let sum1 = getSum(10, 13);
let sum2 = getSum(20, 6);
let sum3 = getSum(sum1, sum2);

console.log(sum1); // 23
console.log(sum2); // 26
console.log(sum3); // 49





