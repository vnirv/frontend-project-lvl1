import readlineSync from 'readline-sync';

export const getRandom = (max) => Math.round(Math.random() * max);
export const getRandomMinMax = (min, max) => min + Math.round(Math.random() * (max - min));

export const showMessage = (answer, expected, name) => {
  if (answer === expected) {
    console.log('Correct');

    return;
  }

  console.log(`${answer} is wrong answer ;(. Correct answer was ${expected}`);
  console.log(`Let's try again, ${name}!`);
};

export const congradulate = (name) => console.log(`Congratulations, ${name}!`);

export const boolToString = (condition) => (condition ? 'yes' : 'no');

export const getAnswerOn = (question) => {
  console.log('Question: ', question);
  return readlineSync.question('Your answer: ');
};

export const runGame = (gameFunc) => {
  for (let i = 0; i < 3; i += 1) {
    gameFunc();
  }
};
