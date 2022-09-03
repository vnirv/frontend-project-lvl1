import {
  congradulate,
  getAnswerOn,
  getRandom,
  showMessage,
  runGame,
} from './helpers.js';

const getNum = (x, y) => {
  if (y) {
    return getNum(y, x % y);
  }
  return Math.abs(x);
};

const gcd = (name) => {
  console.log('Find the greatest common divisor of given numbers.');

  runGame(() => {
    const x = getRandom(20);
    const y = getRandom(20);
    const expr = `${x} ${y}`;

    const anwserU = getAnswerOn(expr);

    showMessage(anwserU, getNum(x, y).toString(), name);
  });

  congradulate(name);
};
export default gcd;
