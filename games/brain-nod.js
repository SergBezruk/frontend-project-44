#!/usr/bin/env node

import { playGame } from '../scr/index.js';

const gameName = 'brain-gcd';
const gameDescription = 'Find the greatest common divisor of given numbers.';

// Функция для вычисления НОД
const findGCD = (num1, num2) => {
  while (num2) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return num1;
};

const generateQuestion = () => {
  const number1 = Math.floor(Math.random() * 100) + 1;
  const number2 = Math.floor(Math.random() * 100) + 1;
  const question = `${number1} ${number2}`;
  const correctAnswer = String(findGCD(number1, number2));
  return { question, correctAnswer };
};

const checkAnswer = (userAnswer, correctAnswer) => userAnswer === correctAnswer;

playGame(gameName, gameDescription, generateQuestion, checkAnswer);

export default async function runBrainGcdGame() {
  // Логика игры Brain GCD
}
