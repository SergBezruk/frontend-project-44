import { playGame } from '../scr/index.js';

const gameName = 'brain-prime';
const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const generateNumber = () => {
  const number = Math.floor(Math.random() * 100) + 1;
  return { question: number, correctAnswer: isPrime(number) ? 'yes' : 'no' };
};

const checkAnswer = (userAnswer, correctAnswer) => userAnswer === correctAnswer;

export default async function runBrainPrimeGame() {
  playGame(gameName, gameDescription, generateNumber, checkAnswer);
}
