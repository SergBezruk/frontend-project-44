// brain-even.js

import { playGame } from '../scr/index.js';

const gameName = 'brain-even';
const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateQuestion = () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const question = String(randomNumber);
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  return { question, correctAnswer };
};

const checkAnswer = (userAnswer, correctAnswer) => userAnswer === correctAnswer;

playGame(gameName, gameDescription, generateQuestion, checkAnswer);

export default async function runBrainEvenGame() {
  // Логика игры Brain Even
}
