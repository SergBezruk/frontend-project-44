import { playGame } from '../scr/index.js';

const gameName = 'brain-progression';
const gameDescription = 'What number is missing in the progression?';
/*
generateProgression генерирует вопросы для игры.
Она использует Math.random() для генерации случайного начального значения (start) и шага (step),
а также случайной длины (length) прогрессии от 6 до 10 элементов.
Затем она выбирает случайный индекс элемента, который будет скрыт (hiddenIndex),
и создает прогрессию с пропущенным элементом.
Правильный ответ (correctAnswer) находится путем вычисления значения элемента по скрытому индексу.
*/
const generateProgression = () => {
  const start = Math.floor(Math.random() * 10) + 1;
  const step = Math.floor(Math.random() * 10) + 1;
  const length = Math.floor(Math.random() * 5) + 6;
  const hiddenIndex = Math.floor(Math.random() * length);
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    if (i === hiddenIndex) {
      progression.push('..');
    } else {
      const num = start + step * i;
      progression.push(num);
    }
  }
// Функция checkAnswer проверяет, является ли ответ пользователя правильным/
  const correctAnswer = start + step * hiddenIndex;
  return { question: progression.join(' '), correctAnswer: String(correctAnswer) };
};

const checkAnswer = (userAnswer, correctAnswer) => userAnswer === correctAnswer;

export default async function runBrainProgressionGame() {
  playGame(gameName, gameDescription, generateProgression, checkAnswer);
}
