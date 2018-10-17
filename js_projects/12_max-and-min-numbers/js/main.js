// Найти минимальное и минимальное число в массиве элементов
let array = [1, 2, 5, 10, 20, 0, 4, 6, -12, -123];
let minValue = array[0];
for (let i = 0; i < array.length; i++) {

  // min
  if (array[i] < minValue) {
    minValue = array[i];
  }

  // // max
  // if (array[i] > minValue) {
  //   minValue = array[i];
  // }
}

console.log(minValue);
