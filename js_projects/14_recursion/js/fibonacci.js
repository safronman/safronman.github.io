// Задача 3.
// Напишите функцию fib(n), которая возвращает n-е число Фибоначчи.
// Последовательность чисел Фибоначчи имеет формулу Fn = Fn-1 + Fn-2.
// То есть, следующее число получается как сумма двух предыдущих. 
// Fn = Fn-1 + Fn-2

function fib(n) { 
  if (n === 1 || n === 2) {
    return 1;
  }
  return fib(n-1) + fib(n-2);
 }

console.log(fib(10));

