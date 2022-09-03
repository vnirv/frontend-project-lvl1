import {
  boolToString,
  congradulate,
  getAnswerOn,
  getRandom,
  showMessage,
  runGame,
} from './helpers.js';

const evenGame = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  runGame(() => {
    const number = getRandom(100);
    const expectedAnswer = boolToString(number % 2 === 0);

    showMessage(getAnswerOn(number), expectedAnswer, name);
  });

  congradulate(name);
};

export default evenGame;
