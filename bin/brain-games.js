#!/usr/bin/env node;

import { playerGreeting } from '../scr/index.js';
import runBrainEvenGame from '../games/brain-even.js';
import runBrainCalcGame from '../games/brain-calc.js';
import runBrainGcdGame from '../games/brain-nod.js';
import runBrainProgressionGame from '../games/brain-progression.js';
import runBrainPrimeGame from '../games/brain-prime.js';

async function runGames() {
  console.log('Welcome to the Brain Games!');

  const games = [runBrainEvenGame, runBrainCalcGame,
    runBrainGcdGame, runBrainProgressionGame, runBrainPrimeGame];

  const playerName = await playerGreeting();
  console.log(`Hello, ${playerName}!\n`);

  for (const game of games) {
    await game();
  }

  console.log(`Congratulations, ${playerName}!`);
}

runGames();
