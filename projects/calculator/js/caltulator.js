class Calculator {
  constructor() {
    this.numberButtons = null;
    this.operationButtons = null;
    this.resultButton = null;
    this.clearButton = null;
    this.changeSignButton = null;
    this.input = null;
    this.operation = '';
    this.firstNumber = 0;
  }

  init (elId) {
    var el = document.querySelector('#' + elId);
  
    this.numberButtons = el.querySelectorAll('.calculator__button--number');
    this.operationButtons = el.querySelectorAll('.calculator__button--operation');
    this.resultButton = el.querySelector('.calculator__button--result');
    this.clearButton = el.querySelector('.calculator__button--clear');
    this.changeSignButton = el.querySelector('.calculator__button--change-sign');
    this.input = el.querySelector('.calculator__input');
  
    this.numberButtons.forEach(item => {
      item.addEventListener('click', this.numberButtonClickListener.bind(this));
    });
    this.operationButtons.forEach(item => {
      item.addEventListener('click', this.operationButtonClickListener.bind(this));
    });
    this.resultButton.addEventListener('click', this.resultButtonClickListener.bind(this));
    this.clearButton.addEventListener('click', this.clearInputValue.bind(this));
    this.changeSignButton.addEventListener('click', this.changeNumberSign.bind(this));
  }

  numberButtonClickListener (event) {
    var buttonNumber = event.currentTarget.innerHTML;
  
    if (this.input.value === '0') {
      this.input.value = buttonNumber;
    } else {
      this.input.value = this.input.value + buttonNumber;
    }
  }

  numberButtonClickListener (event) {
    var buttonNumber = event.currentTarget.innerHTML;
    if (this.input.value === '0') {
      this.input.value = buttonNumber;
    } else {
      this.input.value = this.input.value + buttonNumber;
    }
  }

  operationButtonClickListener (event) {
    this.operation = event.currentTarget.innerHTML;
    this.firstNumber = this.input.value;
    this.input.value = '';
  }

  resultButtonClickListener (event) {
    var secondNumber = this.input.value;
    var result = 0;

    switch (this.operation) {
      case '+':
        result = sum(this.firstNumber, secondNumber);
        break;

      case '-':
        result = minus(this.firstNumber, secondNumber);
        break;

      case '*':
        result = multiply(this.firstNumber, secondNumber);
        break;

      case '/':
        if (secondNumber === '0') {
          window.alert('Деление на 0 невозможно');
        } else {
          result = divide(this.firstNumber, secondNumber);
        }
        break;

      default:
        result = "Unknown operation";
        break;
    }

    this.input.value = result;
  }


  clearInputValue (event) {
    this.input.value = '0';
  }

  changeNumberSign (event) {
    var sign = Math.sign(this.input.value);
    if (sign === 1) {
      this.input.value = '-' + this.input.value;
    } else if (sign === -1) {
      this.input.value = Math.abs(this.input.value);
    }
  }
};