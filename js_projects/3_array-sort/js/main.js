var numbersArray = [5, 2, 1, 21, 9, 6];

// функция сортировки массива от меньшего к большему
function compareNumbers(number1, number2) {
  if (number1 > number2) {
    // первое значение должно распологаться после второго
    return 1;
  } else  if (number1 === number2) {
    // значения эквивалентны, их можно не переставлять
    return 0;
  } else {
    // первое значение должно распологаться перед вторым
    return -1;
  }
};

// // функция сортировки массива от большего к меньшему
// function compareNumbers(number1, number2) {
//   if (number1 > number2) {
//     // первое значение должно распологаться перед вторым
//     return -1;
//   } else  if (number1 === number2) {
//     // значения эквивалентны, их можно не переставлять
//     return 0;
//   } else {
//     // первое значение должно распологаться после второго
//     return 1;
//   }
// };


numbersArray.sort(compareNumbers);
console.log(numbersArray);



