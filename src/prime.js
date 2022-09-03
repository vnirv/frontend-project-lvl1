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


export const isPrime = (num) => {
    for (let i = 2; i < num; i += 1) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 0;
}

const primeGame = (name) => {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

    for (let i = 0; i < 3; i += 1) {
         const  randomNum = getRandom(20);
  
      console.log('Question: ', randomNum);
      const anwser = readlineSync.question('Your answer: ');
      const expected = isPrime(randomNum) ? 'yes' : 'no';
      showMessage(anwser, expected, name);
    }
  
    console.log(`Congratulations, ${name}!`);
  };
  export default primeGame;