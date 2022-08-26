import readlineSync from 'readline-sync';

const getRandom = (max) => Math.round(Math.random() * max);

const evenGame = (name) => {
// eslint-disable-next-line no-console
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const number = getRandom(100);

    const expectedAnswer = number % 2 === 0 ? 'yes' : 'no';
    console.log('Question: ', number);
    const anwserU = readlineSync.question('Your answer: ');

    if (expectedAnswer === anwserU) {
      console.log('Congratulations!');
    } else {
      console.log(`${anwserU} is wrong answer ;(. Correct answer was ${expectedAnswer}`)
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default evenGame;
