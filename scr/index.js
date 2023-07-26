import readlineSync from 'readline-sync';

export const playerGreeting = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

export const playGame = (gameName, gameDescription, generateQuestion, checkAnswer) => {
  console.log(`Welcome to the ${gameName}!`);
  const playerName = playerGreeting();
  console.log(`Hello, ${playerName}!`);
  console.log(gameDescription);

  let playerScore = 0;
  const maxScore = 3;

  while (playerScore < maxScore) {
    const { question, correctAnswer } = generateQuestion();
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);

    if (checkAnswer(userAnswer, correctAnswer)) {
      console.log('Correct!');
      playerScore += 1;
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${playerName}!`);
};
