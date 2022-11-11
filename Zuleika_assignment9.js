const prompt = require('prompt-sync')({sigint: true});
 
//ask users name
console.log("What is your name?");
const name = prompt("> ");
console.log(`Hey there ${name}. Let's try to guess a number.`);
 let playAgain = true;
// This variable is used to determine if the app should continue prompting the user for input
//loop of the game
do
{



// Random number from 1 - 100
let numberInMind = Math.floor(Math.random() * 100) + 1;
let foundCorrectNumber = false;
console.log("I have a number between 0-100, can you guess it?");
// Step 1: Get user input (don't forget that the input is a string)
let guessNumber = prompt("");   
while (!foundCorrectNumber) 
{

  

  // Step 2: Compare the guess to the secret answer and
  // let the user know the feedback (too large, too small, correct).
  if (guessNumber < numberInMind)
  {
      foundCorrectNumber = false;
      console.log("That's too small. Try again.");
      guessNumber = prompt();
  }

  else if (guessNumber > numberInMind)
  {
    foundCorrectNumber = false;
    console.log("It's too large. Next guess?");
    guessNumber = prompt();
  }

  else if (guessNumber == numberInMind)
  {
    console.log(`Congratulations! The number is ${numberInMind}. Wanna go again?`);
    foundCorrectNumber = true;
  }
}
//ask user to play again
do
{ 
  askToPlay = prompt();

  if (askToPlay == "n")
  {
    playAgain = false
  }
  else if (askToPlay == "y")
  {
    console.log("Let's go!!");
  }
  else
  {
    console.log("Invalid input.Please re-enter y/n");
  }

} while(askToPlay != "y" && askToPlay !="n");
  

}while (playAgain === true);

// Bonus Point: prompt user and provide option for user to start a new game after winning