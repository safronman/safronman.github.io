// Программа для сортировки массива элементов

var products = [
  { name: "Grapefruit", calories: 170, color: "red", sold: 8200 },
  { name: "Orange", calories: 160, color: "orange", sold: 12101 },
  { name: "Cola", calories: 210, color: "caramel", sold: 25412 },
  { name: "Diet Cola", calories: 0, color: "caramel", sold: 43922 },
  { name: "Lemon", calories: 200, color: "clear", sold: 14983 },
  { name: "Raspberry", calories: 180, color: "pink", sold: 9427 },
  { name: "Root Beer", calories: 200, color: "caramel", sold: 9909 },
  { name: "Water", calories: 0, color: "clear", sold: 62123 },
];

function compareSold(product1, product2) {
  if (product1.sold > product2.sold) {
    return 1;
  } else if (product1.sold === product2.sold ) {
    return 0;
  } else {
    return -1;
  }
};

function compareName(product1, product2) {
  if (product1.name > product2.name) {
    return 1;
  } else if (product1.name === product2.name ) {
    return 0;
  } else {
    return -1;
  }
};

function compareCalories(product1, product2) {
  if (product1.calories > product2.calories) {
    return 1;
  } else if (product1.calories === product2.calories ) {
    return 0;
  } else {
    return -1;
  }
};

function compareColor(product1, product2) {
  if (product1.color > product2.color) {
    return 1;
  } else if (product1.color === product2.color ) {
    return 0;
  } else {
    return -1;
  }
};


function printProducts(products) {
  products.forEach(item => {
    console.log(`Name: ${item.name}, calories: ${item.calories}, color: ${item.color}, sold: ${item.sold}`)
  });
}

products.sort(compareName);
console.log("Продукты отсортировны по имени");
printProducts(products);
console.log('');

products.sort(compareCalories);
console.log("Продукты отсортировны по количеству калорий");
printProducts(products);
console.log('');

products.sort(compareColor);
console.log("Продукты отсортировны по цвету");
printProducts(products);
console.log('');

products.sort(compareSold);
console.log("Продукты отсортировны количеству продаж");
printProducts(products);
