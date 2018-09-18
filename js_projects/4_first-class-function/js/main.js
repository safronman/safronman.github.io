// программа, которая обращается к списку пассжиров и проверяет следующие условия:
// - наличие пассажира в черном списке
// - оплатил ли пассажир перелет
// - какой напиток и еду будет пассажир в зависимости от класса

var passengers = [
  { name: "Jane", paid: true, ticket: "coach" },
  { name: "Dr. Evil", paid: true, ticket: "firstclass" },
  { name: "Sue property", paid: false, ticket: "firstclass" },
  { name: "Robinson Cruso", paid: true, ticket: "premium" },
  { name: "John", paid: true, ticket: "coach" }
];

// ПЕРЕДАЧА ФУНКЦИИ ДРУГОЙ ФУГКЦИИ
// функция перебора массива пассажиров, принимающая в качестве параметров:
// - массив пассажиров
// - функцию, которая знает как выполнять нужную проверку (testFunction)
function processPassengers(passengers, testFunction) {
  
  for (let i = 0; i < passengers.length; i++) {
    if (testFunction(passengers[i])) {
      return false;
    }
  }

  return true;
};


// функция, проверяющая пассажира на наличие в черном списке
function checkNoFlyList(passenger) {
  return (passenger.name === 'Dr. Evil');
};

var allCanFly = processPassengers(passengers, checkNoFlyList);
if (allCanFly === false) {
  console.log('Самолет не может взлететь, т.к. на борту человек занесенный в черный список');
};


// функция, проверяющая пассажиров на оплату перелета
function checkNotPaid(passenger) {
  return (passenger.paid === false);
};

var allPaid = processPassengers(passengers, checkNotPaid);
if (!allPaid) {
  console.log('Самолет не может взлететь, т.к. не все заплатили за перелет');
};


// функция, выводящая имя пассажира и информацию об оплате
function printPassenger(passenger) {
  var message = passenger.name;
  
  if (passenger.paid === true) {
    message = message + ' оплатил'; 
  } else {
    message = message + ' не оплатил'; 
  }
  console.log(message);
  return false;
};

processPassengers(passengers, printPassenger);



// ВОЗВРАЩЕНИЕ ФУНКЦИИ ИЗ ФУНКЦИЙ
// функция вызывающая обслуживание пассажиров
servePassengers(passengers);


// Функция перебора пассажиров
// и вызова функции serveCustomer для каждого пассажира
function servePassengers(passengers) {
  for (let i = 0; i < passengers.length; i++) {
    serveCustomer(passengers[i]);
  }
};


// функция обслуживаня клиента, которая:
// - принимает заказ у пассажира createDrinkOrder и creareDinnerOrder
// - вызывает эти функции для получения заказа у пассажира
function serveCustomer(passenger) {
  var getDrinkOrderFucntion =  createDrinkOrder(passenger);
  var getDinnerOrderFunction = creareDinnerOrder(passenger);
  getDrinkOrderFucntion();
  getDinnerOrderFunction();
};


// функция, определяющая какой напиток принести пасажира самолета в зависимочти от класса
function createDrinkOrder(passenger) {
  var orderFunction;

  if (passenger.ticket === "firstclass") {
    orderFunction = function () {
      window.alert('Вы будете вино или коктейль?');
    };
  } else if (passenger.ticket === "premium") {
    orderFunction = function () {
      window.alert('Вы будете вино, лимонад или воду?');
    };
  } else {
    orderFunction = function () {
      window.alert('Вы будете воду или колу?');      
    };
  }
  return orderFunction;
};


// функция, определяющая что будет кушать пассажир самолета в зависимости от класса
function creareDinnerOrder(passenger) {
  var orderFunction;

  if (passenger.ticket === "firstclass") {
    orderFunction = function () {
      window.alert('Вы будете курицу или пасту?');
    };
  } else if (passenger.ticket === "premium") {
    orderFunction = function () {
      window.alert('Вы будете закуски или сырную тарелку?');
    };
  } else {
    orderFunction = function () {
      window.alert('Вы будете орешки или сухарики?');
    };
  }
  return orderFunction;
};

