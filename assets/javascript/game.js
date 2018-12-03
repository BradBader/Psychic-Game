var pcGuessArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var userGuesses = [];
// document.getElementById("guessLeft").innerHTML = " " + guessesLeft + ".";


// Generates random number, picks array ID of random number.
var numeric = Math.floor(Math.random() * 26);
var pcGuess = (pcGuessArray[numeric]);
console.log(pcGuess);
winning = false;


// console.log(numeric);

// on key up, if more than 0 guesses remain, subtracts one guess, assigns key value
document.onkeyup = function (event) {
    if (guessesLeft > 0 && winning === false) {
        guessesLeft--;
        // console.log(guessesLeft);
        var userGuess = (event.key);
        userGuesses.push(userGuess);
        console.log(userGuesses);
        document.getElementById("guessed").innerHTML = userGuesses + " , ";
        document.getElementById("guessLeft").innerHTML = "You have " + guessesLeft + " guesses remaining.";
    if (event.key === pcGuess) {
        wins++;
        // winning = true;
    }
    if (guessesLeft === 0) {
        losses++;
        document.getElementById("losses").innerHTML = "Losses: " + losses + ".";
        winning = true;
    }
    if (winning === true) {
        console.log (winning);
        document.getElementById("wins").innerHTML = "Wins: " + wins + ".";
        var numeric = Math.floor(Math.random() * 26);
        var pcGuess = (pcGuessArray[numeric]);
        console.log(pcGuess);
        var guessesLeft = 9;
        userGuesses.clear();
        // winning === false;}

            // if (guessesLeft === 0) { losses++;

            // var numeric = Math.floor(Math.random() * 26);
            // var pcGuess =  (pcGuessArray[numeric]);
            // console.log(pcGuess);
            // var guessesLeft = 9;
            //     document.getElementById("guessLeft").innerHTML = "You have " + guessesLeft + " guesses remaining.";
            // }

    }
}
}
