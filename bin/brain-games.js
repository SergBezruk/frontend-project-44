#!/usr/bin/env node;

import runBrainEvenGame from '../games/brain-even.js';
import runBrainCalcGame from '../games/brain-calc.js';

async function runGames() {
  console.log('Welcome to the Brain Games!');

  const games = [runBrainEvenGame, runBrainCalcGame];

  const playerName = await playerGreeting();
  console.log(`Hello, ${playerName}!\n`);

  for (const game of games) {
    await game();
  }

  console.log(`Congratulations, ${playerName}!`);
}

runGames();
