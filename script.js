const displayInput = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentNumber = '0';
let previousNumber = '';
let operator = '';

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    switch (button.id) {
      case 'clear':
        currentNumber = '0';
        previousNumber = '';
        operator = '';
        break;
      case 'backspace':
        currentNumber = currentNumber.slice(0, -1);
        if (currentNumber === '') {
          currentNumber = '0';
        }
        break;
      case 'divide':
      case 'multiply':
      case 'subtract':
      case 'add':
        previousNumber = currentNumber;
        currentNumber = '0';
        operator = button.id;
        break;
      case 'equals':
        if (previousNumber !== '' && operator !== '') {
          let result;
          switch (operator) {
            case 'divide':
              result = parseFloat(previousNumber) / parseFloat(currentNumber);
              break;
            case 'multiply':
              result = parseFloat(previousNumber) * parseFloat(currentNumber);
              break;
            case 'subtract':
              result = parseFloat(previousNumber) - parseFloat(currentNumber);
              break;
            case 'add':
              result = parseFloat(previousNumber) + parseFloat(currentNumber);
              break;
          }
          currentNumber = result.toString();
          previousNumber = '';
          operator = '';
        }
        break;
      default:
        if (currentNumber === '0') {
          currentNumber = button.id;
        } else {
          currentNumber += button.id;
        }
    }
    displayInput.value = currentNumber;
  });
});
