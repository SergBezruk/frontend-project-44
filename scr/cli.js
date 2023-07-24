import readlineSync from 'readline-sync' 

export const playerGreeting = () => {
    const name = readlineSync.question('May I have your name? ');
    return (`Hello, ${name}`);
};