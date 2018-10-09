// Псевдоистина и псевдоложь

// 5 псевдоложных значений
// 1. undefined - неопределенная переменная 
var test_1;
if(test_1 == true){
console.log(true)}
else{
console.log(false)}

// 2. null - несуществующий объект 
var test_2 = document.getElementById("id");
if(test_2){
console.log(true)}
else{
console.log(false)}

// 3. ноль 
if(0){
console.log(true)}
else{
console.log(false)}

// 4. пустая строка 
if(""){
console.log(true)}
else{
console.log(false)}

// 5. NaN - не число
if(NaN){
console.log(true)}
else{
console.log(false)}


// Примеры псевдоистинных значений

var test_0 = {
  ex_1: "qwert",
  ex_2: 21
}

// 1. объект 
if (test_0) {
  console.log(true)
}
else {
  console.log(false)
}

// 2. массив 
if ([]) {
  console.log(true)
}
else {
  console.log(false)
}

// 3. число 
if (35) {
  console.log(true)
}
else {
  console.log(false)
}

// 4. строка 
if (" ") {
  console.log(true)
}
else {
  console.log(false)
}