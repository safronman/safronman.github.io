// Быстрая сортировка массивов
let array = [4, 1, 2, 3, 8, 12, -6, -7, -123, 99];
console.log(`Исходный массив: ${array}`);

// Функция, которая меняет местами 2 выбранных элемента местами
function swap(array, firstIndex, secondIndex) {
  const temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

// Функция разделения массива
function partition(array, left, right) {
  var pivot = array[Math.floor((right + left) / 2)],
    i = left,
    j = right;

  while (i <= j) {
    while (array[i] < pivot) {
      i++;
    }
    while (array[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(array, i, j);
      i++;
      j--;
    }
  }
  return i;
}

// Функция сортировки
function quickSort(array, left, right) {
  var index;
  if (array.length > 1) {
    index = partition(array, left, right);
    if (left < index - 1) {
       // рекурсивно вызываем сортировку для левой части
      quickSort(array, left, index - 1);
    }
    if (index < right) {
      // рекурсивно вызываем сортировку для правой части
      quickSort(array, index, right);
    }
  }
  return array;
}

// first call
var result = quickSort(array, 0, array.length - 1);
console.log(result);
