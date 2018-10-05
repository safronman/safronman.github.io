// 5. Reduce
// Метод Reduce производит пошагавую аккумуляцию элементов массива.
// Метод Reduce проходит по массиву и обращаем внимание не только на текущий жлемент массива, но и на то, что было подсчитано до него

// Задача:
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
  return total + item;
}, 0);

console.log(sum);
console.log(sum2);
