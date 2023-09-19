const randomNumber = Math.floor(Math.random() * 10) + 1;

// Initialize a variable to keep track of the number of guesses
let numberOfGuesses = 0;

// Prompt the user to guess the number
while (true) {
  const userGuess = prompt("Guess the number between 1 and 10:");

  // Convert the user's input to a number
  const guess = parseInt(userGuess);

  // Check if the input is a valid number
  if (isNaN(guess) || guess < 1 || guess > 10) {
    console.log("Please enter a valid number between 1 and 10.");
    continue; // Continue the loop if the input is invalid
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
// test
