import readlineSync from 'readline-sync';
// Импортируем функцию readlineSync из модуля 'readline-sync', которая позволяет взаимодействовать с пользователем через командную строку.

export const playerGreeting = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};
// Функция playerGreeting запрашивает у пользователя его имя и возвращает его.

export const playGame = (gameName, gameDescription, generateQuestion, checkAnswer) => {
  // Функция playGame - основная логика для запуска игры.
  console.log(`Welcome to the ${gameName}!`);
  // Выводим приветствие игрока с названием игры, переданным в gameName.

  const playerName = playerGreeting();
  // Вызываем функцию playerGreeting, чтобы запросить у игрока его имя и сохранить его в playerName.

  console.log(`Hello, ${playerName}!`);
  // Выводим приветствие с именем игрока.

  console.log(gameDescription);
  // Выводим описание игры, переданное в gameDescription.

  let playerScore = 0;
  const maxScore = 3;
  // Инициализируем переменные playerScore (счетчик правильных ответов игрока) и maxScore (максимальное количество правильных ответов, чтобы завершить игру).

  while (playerScore < maxScore) {
    // Запускаем цикл, пока счетчик правильных ответов меньше максимального количества правильных ответов.
    const { question, correctAnswer } = generateQuestion();
    // Вызываем функцию generateQuestion, чтобы получить новый вопрос и правильный ответ.

    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
    // Запрашиваем у пользователя его ответ на вопрос, который выводим вместе с вопросом.

    if (checkAnswer(userAnswer, correctAnswer)) {
      // Если ответ пользователя правильный, то:
      console.log('Correct!');
      // Выводим сообщение "Correct!".
      playerScore += 1;
      // Увеличиваем счетчик правильных ответов игрока на 1.
    } else {
      // Если ответ пользователя неправильный, то:
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      // Выводим сообщение о неправильном ответе и показываем правильный ответ.
      console.log(`Let's try again, ${playerName}!`);
      // Выводим сообщение с просьбой попробовать еще раз с именем игрока.
      return;
      // Завершаем функцию, так как игра окончена из-за неправильного ответа.
    }
  }

  console.log(`Congratulations, ${playerName}!`);
  // Когда игрок набирает достаточное количество правильных ответов, выводим сообщение с поздравлением.
};
// Экспортируем функцию playGame, чтобы она была доступна для использования в других модулях.
