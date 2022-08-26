/* eslint-disable no-console */
import readlineSync from 'readline-sync';
import { getRandomMinMax, getRandom } from '../src/calculator.js';

const showMessage = (answer, expected, name) => {
  if (answer === expected) {
    console.log('Correct');

    return;
  }

  console.log(`${answer} is wrong answer ;(. Correct answer was ${expected}`);
  console.log(`Let's try again, ${name}!`);
};

const createMissingProgression = () => {
  const arr = [];
  const arrLength = getRandomMinMax(5, 10);
  const progressionNum = getRandomMinMax(1, 10);

  for (let i = 0; i < arrLength; i += 1) {
    arr[i] = (i + 1) * progressionNum;
  }

  const [missingNum] = arr.splice(getRandom(arrLength - 1), 1, '..');

  return [arr.join(' '), missingNum.toString()];
};

const missingNum = (name) => {
  for (let i = 0; i < 3; i += 1) {
    const [arr, expected] = createMissingProgression();

    console.log('Question: ', arr);
    const anwser = readlineSync.question('Your answer: ');

    showMessage(anwser, expected, name);
  }

  console.log(`Congratulations, ${name}!`);
};
export default missingNum;
