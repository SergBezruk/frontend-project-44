#!/usr/bin/env node

import { playGame } from '../scr/index.js';

// Задаем название игры gameName и ее описание gameDescription.
const gameName = 'brain-gcd';
const gameDescription = 'Find the greatest common divisor of given numbers.';

// Функция findGCD реализует алгоритм нахождения НОД двух чисел с использованием алгоритма Евклида.
const findGCD = (num1, num2) => {
  while (num2) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return num1;
};

// generateQuestion генерирует вопросы для игры. Math.random() генерирует 2 случайных числа.
// Затем она формирует строку вопроса в формате "случайное_число1 случайное_число2".
// Также функция использует функцию findGCD, чтобы найти НОД для сгенерированных чисел.
const generateQuestion = () => {
  const number1 = Math.floor(Math.random() * 100) + 1;
  const number2 = Math.floor(Math.random() * 100) + 1;
  const question = `${number1} ${number2}`;
  const correctAnswer = String(findGCD(number1, number2));
  return { question, correctAnswer };
};

// checkAnswer проверяет, является ли ответ пользователя правильным,
// сравнивая его с правильным ответом.
const checkAnswer = (userAnswer, correctAnswer) => userAnswer === correctAnswer;

export default async function runBrainGcdGame() {
  // Вызываем playGame, передавая ей параметры выше.
  playGame(gameName, gameDescription, generateQuestion, checkAnswer);
}
