import {
  getRandomMinMax,
  getRandom,
  showMessage,
  congradulate,
  getAnswerOn,
  runGame,
} from './helpers.js';

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
  runGame(() => {
    const [arr, expected] = createMissingProgression();

    showMessage(getAnswerOn(arr), expected, name);
  });

  congradulate(name);
};
export default missingNum;
