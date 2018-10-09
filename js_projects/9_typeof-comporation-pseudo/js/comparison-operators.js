// Преобразование операндов

// 1. Сравнение числа со строкой
// Строка преобразуется в число
if (9 == '9') {
  console.log('i am number 9');
} else {
  console.log('2');
}

if (9 == 'nine') {
  console.log('1');
} else {
  console.log('i am not a number 9');
}


// 2. Сравнение булевского значения с любым другим типом
// Булевское значение преобразуется число (true в 1, false в 0)
if (1 == true) {
  console.log('i am true');
} else {
  console.log('2');
}


// 3. Сравнение null и undefined
// Сравнение null и undefined дает результат true
if (undefined == null) {
  console.log('we are equil');
} else {
  console.log('2');
}