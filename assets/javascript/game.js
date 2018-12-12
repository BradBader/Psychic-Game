var pcGuessArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// console.log(pcGuessArray);
var wins = 0;
// console.log(wins + "wins");
var losses = 0;
// console.log(losses + " losses");
var userGuesses = [];
var initialOne;
// console.log(userGuesses+ " userGuesses");
var chances = 9;
var pcGuess;
var numeric;
var i = 0;
// pcGuess = (pcGuessArray[numeric]);


function clearArray() {
    userGuesses = [];
}

function pcGuessFunction() {
    numeric = Math.round(Math.random() * 26);
    pcGuess = pcGuessArray[numeric];
    console.log(pcGuess + " This is the PC guess!");
}

document.onkeyup = function (event) {
    initialOne = event.key;
    userGuess = initialOne.toLowerCase();
    console.log(userGuess)
    i = 0;
    console.log(i)



    if (userGuess == pcGuess) {
        wins++;
        document.getElementById("wins").innerHTML = "Wins: " + wins;
        // console.log("userguess === pcguess if line ran");
        win();
    } else if (userGuess != pcGuess && pcGuessArray.indexOf(userGuess) == -1) {
        console.log("Dear sir or madam, thank you for pressing a key, unfortunately you pressed a key that I will not accept. Please try again, this time, with feeling.  Push a letter key. Push a letter key TO THE LIMIT!")
    } else if (userGuess != pcGuess && userGuesses.indexOf(userGuess) != -1) {
        console.log("bad idea!");
    } else if (chances > 0) {
        // console.log(guessesLeft);
        // console.log("if guesses > 0 ran")
        chances--;
        userGuesses.push(userGuess);
        document.getElementById("guessed").innerHTML += userGuess + ", ";
        document.getElementById("guessLeft").innerHTML = "Guesses Remaining: " + chances;
        // guessesLeft--;
    } else if (chances == 0) {
        losses++;
        document.getElementById("losses").innerHTML = "Losses: " + losses + ".";
        // console.log("guesses left === 0 script ran");
        pluslosses();
    }
}

function win() {
    clearArray();
    numeric = Math.floor(Math.random() * 26);
    pcGuess = (pcGuessArray[numeric]);
    console.log(pcGuess);
    chances = 9;
    document.getElementById("guessed").innerHTML = "";
    document.getElementById("guessLeft").innerHTML = "Guesses Remaining: " + chances;

}

function pluslosses() {
    clearArray();
    numeric = Math.floor(Math.random() * 26);
    pcGuess = (pcGuessArray[numeric]);
    console.log(pcGuess);
    chances = 9;
    document.getElementById("guessed").innerHTML = "";
    document.getElementById("guessLeft").innerHTML = "Guesses Remaining: " + chances;

}

pcGuessFunction();
