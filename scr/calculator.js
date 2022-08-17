import readlineSync from 'readline-sync';

export const getRandom = (max) => Math.round(Math.random() * max);

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

    console.log('Question: ', expr);
    const anwserU = readlineSync.question('Your answer: ');
    const expectedAnswer = (anwserU === result.toString() ? 'Correct!' : `'${anwserU}' is wrong answer ;(. Correct answer was '${result}'.
    Let's try again, ${name}!`);

    console.log(expectedAnswer);
  }
  console.log(`Congratulations, ${name}!`);
};
export default calculator;
