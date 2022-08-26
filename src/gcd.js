import readlineSync from 'readline-sync';
import { getRandom } from '../src/calculator.js';

const getNum = (x, y) => {
  if (y) {
    return getNum(y, x % y);
  }
  return Math.abs(x);
};

const gcd = (name) => {
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < 3; i += 1) {
    const x = Math.abs(getRandom(20));
    const y = Math.abs(getRandom(20));
    const expr = `${x},${y}`;

    console.log('Question: ', expr);
    const anwserU = readlineSync.question('Your answer: ');
    const result = getNum(x, y).toString();
    const message = (anwserU === result ? 'Correct!' : `${anwserU} is wrong answer ;(. Correct answer was ${result}.
    Let's try again, ${name}!`);

    console.log(message);
  }
  console.log(`Congratulations, ${name}!`);
};
export default gcd;
