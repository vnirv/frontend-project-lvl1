import {
  congradulate,
  getRandom,
  showMessage,
} from './helpers.js';

const calculator = (name) => {
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const number1 = getRandom(100);
    const number2 = getRandom(100);
    const oper = ['+', '-', '*'];
    const randomOper = oper[Math.round(Math.random() * (2 - 0))];
    const expr = `${number1} ${randomOper} ${number2}`;

    let result = 0;
    switch (randomOper) {
      case '+':
        result = number1 + number2;
        break;
      case '-':
        result = number1 - number2;
        break;
      case '*':
        result = number1 * number2;
        break;
      default:
        result = null;
    }

    showMessage(expr, result, name);
  }
  congradulate(name);
};
export default calculator;
