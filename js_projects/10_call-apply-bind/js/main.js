// Call, apply, bind - методы функции, которые используются для вызова функции в определенном контексте. Для явного указания контекста this.

// Когда мы объявляем функцию, то она автоматически наследуется от некоего базового объетка, который называется function prototype (прототип функции).
// Так вот методы call, apply, bind являются методами prototype
// Это позволяет нам вызывать эти методы просто через точку

let employee1 = {
  name: 'Hanna',
  position: 'manager',
  salary: 500
}

let employee2 = {
  name: 'Ivan',
  position: 'junior developer',
  salary: 300
}

function promote(newPosition, salaryRise) {
  this.position = newPosition;
  this.salary += salaryRise;
  return `${this.name} теперь ${this.position} с зарплатой ${this.salary} $`
}

//------------------------CALL-----------------------------
// Вызываем функцию promote с методом call. 
// Первым параметром передаем новый контекст выполнения
// Т.е. то, что будет подставляться вместо this при выполнении функции

// func.call(context, arg1, arg2);
console.log(promote.call(employee1, 'Head manager', 300));
console.log(promote.call(employee2, 'Middle developer', 400));


//------------------------APPLY-----------------------------
// Если нам неизвестно, с каким количеством аргументов понадобится вызвать функцию, можно использовать более мощный метод: apply.
// Вызов функции при помощи func.apply работает аналогично func.call, но принимает массив аргументов вместо списка.

// // func.apply(context, [arg1, arg2]);
// console.log(promote.apply(employee1, ['Head manager', 300]));
// console.log(promote.apply(employee2, ['Middle developer', 400]));


//------------------------BIND-----------------------------
// Методы call и apply вызывают функцию с определеным контекстом и аргументами. 
// А bind не вызывает функцию. Метод bind позволяет связать функцию с определеным контекстом и определенными параметрами для того чтобы вызвать ее позже, когда будет необходимо.
// Метод bind необходим в случаях когда контекст вызова функции теряется

// На функции promote вызываем метод bind и аналогично call и apply передаем контекст выполнения функции 
// let promoteHanna = promote.bind(employee1);
// console.log(promoteHanna('head manager', 300));

