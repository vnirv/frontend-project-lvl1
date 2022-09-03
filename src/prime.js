import {
  getRandom,
  showMessage,
  boolToString,
  congradulate,
  getAnswerOn,
  runGame,
} from './helpers.js';

export const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 0;
};

const primeGame = (name) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  runGame(() => {
    const randomNum = getRandom(20);

    const anwser = getAnswerOn(randomNum);
    const expected = boolToString(isPrime(randomNum));
    showMessage(anwser, expected, name);
  });

  congradulate(name);
};
export default primeGame;
