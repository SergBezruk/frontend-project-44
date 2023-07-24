import readlineSync from 'readline-sync';

const playerGreeting = () => {
  const name = readlineSync.question('May I have your name? ');
  return (`Hello, ${name}`);
};

export default playerGreeting;
