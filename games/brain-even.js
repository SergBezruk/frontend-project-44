// brain-even.js

import { playGame } from '../scr/index.js';
// Название и описание игры.
const gameName = 'brain-even';
const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

// Функция generateQuestion генерирует вопросы для игры.
const generateQuestion = () => {
// Генерируем случайное число от 1 до 100.
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  // Преобразуем полученное рандомное число в строку.
  const question = String(randomNumber);
  // В correctAnswer вычисляем правильный ответ. Четное ли рандомное число или нет.
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  // Функция возвращает вопрос и правильный ответ.
  return { question, correctAnswer };
};
// Функция checkAnswer проверяет, является ли ответ пользователя правильным.
const checkAnswer = (userAnswer, correctAnswer) => userAnswer === correctAnswer;

export default async function runBrainEvenGame() {
  // Запускаем игру, передавая название, описание, функции генерации вопросов и проверки ответа.
  playGame(gameName, gameDescription, generateQuestion, checkAnswer);
}
