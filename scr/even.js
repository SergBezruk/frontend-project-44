import readlineSync from 'readline-sync';
import playerGreeting from './cli.js';

const evenGames = () => {
  const name = playerGreeting();
  let points = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no"');

  for (let i = points; points !== 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');

    const isEven = randomNumber % 2 === 0;
    const isUserAnswerCorrect = (isEven && answer === 'yes') || (!isEven && answer === 'no');

    if (isUserAnswerCorrect) {
      console.log('Correct!');
      points += 1;
    } else {
      return `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`;
    }
  }
  if (points === 3) {
    return (`Congratulations, ${name}!`);
  }
};

export default evenGames;
