// Метод splice – это универсальный раскладной нож для работы с массивами. Умеет все: удалять элементы, вставлять элементы, заменять элементы – по очереди и одновременно.

// Синтаксис
// array.splice(start, deleteCount[, item1[, item2[, ...]]])

// start
// Индекс, по которому начинать изменять массив. Если больше длины массива, реальный индекс будет установлен на длину массива. Если отрицателен, указывает индекс элемента с конца.

// deleteCount
// Целое число, показывающее количество старых удаляемых из массива элементов. Если deleteCount равен 0, элементы не удаляются. В этом случае вы должны указать как минимум один новый элемент. Если deleteCount больше количества элементов, оставшихся в массиве, начиная с индекса start, то будут удалены все элементы до конца массива.

// itemN
// Необязательные параметры. Добавляемые к массиву элементы. Если вы не укажете никакого элемента, splice() просто удалит элементы из массива.

let myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];

// 1. Удаление элементов из массива
let deleteFishElement = myFish.splice(4, myFish.length);  
console.log(myFish);  // ["angel", "clown", "drum", "mandarin"]  

// 2. Замена элементов массива
let replaceFishElement = myFish.splice(2, 1, 'ariel');    
console.log(myFish);  // ["angel", "clown", "ariel", "mandarin"]

// 3. Добавление элементов массива без удаления
let addFishElements = myFish.splice(2, 0, 'fish10', 'fish20');
console.log(myFish);  // ["angel", "clown", "fish10", "fish20", "ariel", "mandarin"]

//4. Добавление элементов в массив начиная с конца массива. Отрицательный индекс
let addFishElementsBeginFromEnd = myFish.splice(-1, 0, 'fish18', 'fish19');
console.log(myFish);  // ["angel", "clown", "fish10", "fish20", "ariel", "fish18", "fish19", "mandarin"]  