class Calculator {
  constructor() {
    this.numberButtons = null;
    this.operationButtons = null;
    this.resultButton = null;
    this.clearButton = null;
    this.changeSignButton = null;
    this.input = 0;
    this.operation = '';
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.result = 0;
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
    this.clearButton.addEventListener('click', this.clearValues.bind(this));
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

  operationButtonClickListener (event) {
    if (this.operation === '') {
      this.operation = event.currentTarget.innerHTML;
      this.firstNumber = this.input.value;
      this.input.placeholder = this.firstNumber;
    } else {
      this.resultButtonClickListener();
      this.firstNumber = this.result;
      this.operation = event.currentTarget.innerHTML;
      this.input.placeholder = this.result;
    }

    this.input.value = '';
  }

  resultButtonClickListener () {
    this.secondNumber = this.input.value;

    switch (this.operation) {
      case '+':
      this.result = sum(this.firstNumber, this.secondNumber);
        break;

      case '-':
      this.result = minus(this.firstNumber, this.secondNumber);
        break;

      case '*':
      this.result = multiply(this.firstNumber, this.secondNumber);
        break;

      case '/':
        if (this.secondNumber === '0') {
          window.alert('Деление на 0 невозможно');
        } else {
          this.result = divide(this.firstNumber, this.secondNumber);
        }
        break;

      default:
      this.result = "Неизвестная операция";
        break;
    }

    this.input.value = this.result;
  }

  clearValues () {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.result = 0;
    this.input.value = '0';
    this.operation = '';
  }

  changeNumberSign () {
    var sign = Math.sign(this.input.value);
    if (sign === 1) {
      this.input.value = '-' + this.input.value;
    } else if (sign === -1) {
      this.input.value = Math.abs(this.input.value);
    }
  }
}
