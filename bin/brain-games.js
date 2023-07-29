#!/usr/bin/env node;

// Импортируем функции запуска различных игр.
import { playerGreeting } from '../scr/index.js';
import runBrainEvenGame from '../games/brain-even.js';
import runBrainCalcGame from '../games/brain-calc.js';
import runBrainGcdGame from '../games/brain-nod.js';
import runBrainProgressionGame from '../games/brain-progression.js';
import runBrainPrimeGame from '../games/brain-prime.js';

// Функция runGames - запускает все игры.
async function runGames() {
  // Массив с функциями запуска различных игр.
  const games = [runBrainEvenGame, runBrainCalcGame,
    runBrainGcdGame, runBrainProgressionGame, runBrainPrimeGame];

  // Запускаем каждую игру последовательно в цикле for...of.
  for (const game of games) {
    await game();
  }

  // Поздравляем игрока с окончанием всех игр.
  console.log('End of the game!');
}
// Запускаем функцию runGames для начала игр.
runGames();
