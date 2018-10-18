// Пузырьковая сортировка массива
let array = [4, 1, 2, 3, 8, 12, -6, -7, -123, 99];
console.log(`Исходный массив: ${array}`);


for (let i = 0; i < array.length - 1; i++) {
  for (let j = 0; j < array.length - 1; j++) {
    if (array[j] > array[j + 1]) {
      let temp = array[j];
      array[j] = array[j + 1];
      array[j + 1] = temp;
    }
  }
  console.log(`Новый массив: ${array}`);
}
