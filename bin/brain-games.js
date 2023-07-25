#!/usr/bin/env node;

/*
шебанг указывает операционной системе
какой интерпретатор нужно использовать для выполнения скрипта.
*/

import evenGames from '../scr/even.js';

console.log('Welcome to the Brain Games!');

const even = evenGames();
console.log(even);
