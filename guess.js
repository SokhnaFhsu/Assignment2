const randomNumber = Math.floor(Math.random() * 10) + 1;

let numberOfGuesses = 0;


while (true) {
  const userGuess = prompt("Guess the number between 1 and 10:");
  const guess = parseInt(userGuess);

  
  if (isNaN(guess) || guess < 1 || guess > 10) {
    console.log("Please enter a valid number between 1 and 10.");
    continue; 
  }

  numberOfGuesses++; 

  if (guess === randomNumber) {
    console.log(`Congratulations! You guessed the correct number (${randomNumber}) in ${numberOfGuesses} guesses.`);
    break; 
  } else if (guess < randomNumber) {
    console.log("Try a higher number.");
  } else {
    console.log("Try a lower number.");
  }
}

