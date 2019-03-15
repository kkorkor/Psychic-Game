// Creates an array that lists out all of the options (a through z).
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
    "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Creating variables to hold the number of wins, losses, guess left and used.
var wins = 0;
var losses = 0;
var numofGuessesLeft = 9;
var guessChoicesUsed = [];
var openLetters = [];

resetGame();
display();

document.onkeyup = function (event) {
    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    if (guess === openLetters) {
        win();
      } else if (numofGuessesLeft - 1 === 0) {
        lost();
      } else {
        fail(guess);
      }
    
      display();
    }
    
    function display() {
      var wins = document.getElementById("wins");
      var loses = document.getElementById("loses");
      var numofGuessesLeft = document.getElementById("number of guesses left");
      var guessChoicesUsed = document.getElementById("guess choices used");
      wins.innerHTML = wins;
      loses.innerHTML = loses;
      numofGuessesLeft.innerHTML = numofGuessesLeft;
      guessChoicesUsed.innerHTML = guessChoicesUsed.join(',');
    }
    
    function win() {
      wins++;
      resetGame();
    }
    
    function lost() {
      loses++;
      resetGame();
    }
    
    function fail(letter) {
      numofGuessesLeft--;
      guessChoicesUsed.push(letter);
    }
    
   
    

            }