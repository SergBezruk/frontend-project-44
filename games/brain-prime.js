import { playGame } from '../scr/index.js';

const gameName = 'brain-prime';
const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// Функция isPrime проверяет, является ли число простым.
const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};
// generateNumber генерирует вопросы для игры.
// Она использует Math.random() для генерации случайного числа от 1 до 100. 
// Затем она формирует объект с вопросом и правильным ответом.
const generateNumber = () => {
  const number = Math.floor(Math.random() * 100) + 1;
  return { question: number, correctAnswer: isPrime(number) ? 'yes' : 'no' };
};
// checkAnswer проверяет, является ли ответ пользователя правильным,
// сравнивая его с правильным ответом.
const checkAnswer = (userAnswer, correctAnswer) => userAnswer === correctAnswer;

export default async function runBrainPrimeGame() {
  playGame(gameName, gameDescription, generateNumber, checkAnswer);
}
