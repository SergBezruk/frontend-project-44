// brain-calc.js

import { playGame } from '../scr/index.js';

const gameName = 'brain-calc';
const gameDescription = 'What is the result of the expression?';

const generateQuestion = () => {
  const randomNumber1 = Math.floor(Math.random() * 100) + 1;
  const randomNumber2 = Math.floor(Math.random() * 100) + 1;
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const question = `${randomNumber1} ${operator} ${randomNumber2}`;
  let correctAnswer;

  switch (operator) {
    case '+':
      correctAnswer = String(randomNumber1 + randomNumber2);
      break;
    case '-':
      correctAnswer = String(randomNumber1 - randomNumber2);
      break;
    case '*':
      correctAnswer = String(randomNumber1 * randomNumber2);
      break;
    default:
      break;
  }

  return { question, correctAnswer };
};

const checkAnswer = (userAnswer, correctAnswer) => userAnswer === correctAnswer;

playGame(gameName, gameDescription, generateQuestion, checkAnswer);

export default async function runBrainCalcGame() {
  console.log('Running the Brain Calc game...');
  // Логика игры Brain Calc
}
