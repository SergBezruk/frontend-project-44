// brain-calc.js

// Импортируем функцию playGame из файла '../scr/index.js'
import { playGame } from '../scr/index.js';

// Задаем название игры и ее описаниею.
const gameName = 'brain-calc';
const gameDescription = 'What is the result of the expression?';

// Функция generateQuestion генерирует вопросы для игры.
const generateQuestion = () => {
  // Генерируем два случайных числа от 1 до 100.
  const randomNumber1 = Math.floor(Math.random() * 100) + 1;
  const randomNumber2 = Math.floor(Math.random() * 100) + 1;

  // Массив операторов (+, -, *) для генерации случайного оператора.
  const operators = ['+', '-', '*'];
  // Выбираем случайный оператор из массива
  const operator = operators[Math.floor(Math.random() * operators.length)];

  // Создаем строку вопроса в формате "случайное_число1 оператор случайное_число2".
  const question = `${randomNumber1} ${operator} ${randomNumber2}`;

  // Вычисляем правильный ответ в зависимости от выбранного оператора.
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

  // Возвращаем объект с вопросом и правильным ответом.
  return { question, correctAnswer };
};

// Функция checkAnswer проверяет, является ли ответ пользователя правильным.
const checkAnswer = (userAnswer, correctAnswer) => userAnswer === correctAnswer;

// Экспортируем функцию runBrainCalcGame, которая пока не определена.
export default async function runBrainCalcGame() {
  // Запускаем игру, передавая название, описание, функции генерации вопросов и проверки ответа.
  playGame(gameName, gameDescription, generateQuestion, checkAnswer);
}
