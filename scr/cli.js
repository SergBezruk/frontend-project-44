import readlineSync from 'readline-sync';

const playerGreeting = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello! ${name}`);
  return name;
};

export default playerGreeting;
