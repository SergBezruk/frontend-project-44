#!/usr/bin/env node;

/*
шебанг указывает операционной системе
какой интерпретатор нужно использовать для выполнения скрипта.
*/

import playerGreeting from '../scr/cli.js';

console.log('Welcome to the Brain Games!');

const greeting = playerGreeting();
console.log(greeting);
