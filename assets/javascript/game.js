var pcGuessArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// console.log(pcGuessArray);
var wins = 0;
// console.log(wins + "wins");
var losses = 0;
// console.log(losses + " losses");
var userGuesses = [];
// console.log(userGuesses+ " userGuesses");
var wtfLeft = 9;
// console.log(wtfLeft + " wtfLeft variable value");
var pcGuess;
var numeric;
// pcGuess = (pcGuessArray[numeric]);


function clearArray() {
    userGuesses = [ ];
}

function pcGuessFunction() {
    numeric = Math.floor(Math.random() * 26);
    pcGuess = pcGuessArray[numeric];
    console.log(pcGuess + " This is the PC guess!");
}

document.onkeyup = function (event) {
    var userGuess = event.key;
    // console.log(userGuess);
    // console.log(userGuesses);
    // console.log(userGuesses.indexOf(userGuess));
    // console.log("you have" + wtfLeft + "before the line 19 guessesLeft--");
    // console.log(wtfLeft);
    // document.getElementById("guessLeft").innerHTML = "Guesses Remaining: " + wtfLeft;
 

    if (userGuess == pcGuess) {
        wins++;
        document.getElementById("wins").innerHTML = "Wins: " + wins;
        // console.log("userguess === pcguess if line ran");
        win();
    } else if (userGuess != pcGuess && userGuesses.indexOf(userGuess) != -1) {
        console.log("bad idea!");
    } else if (wtfLeft > 0) {
        // console.log(guessesLeft);
        // console.log("if guesses > 0 ran")
        wtfLeft--;
        userGuesses.push(userGuess);
        document.getElementById("guessed").innerHTML += userGuess + ", ";
        // console.log(wtfLeft);
        document.getElementById("guessLeft").innerHTML = "Guesses Remaining: " + wtfLeft;
        // guessesLeft--;
    } else if (wtfLeft == 0) {
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
    wtfLeft = 9;
    document.getElementById("guessed").innerHTML = "";
    document.getElementById("guessLeft").innerHTML = "Guesses Remaining: " + wtfLeft;

}

function pluslosses() {
    clearArray();
    numeric = Math.floor(Math.random() * 26);
    pcGuess = (pcGuessArray[numeric]);
    console.log(pcGuess);
    wtfLeft = 9;
    document.getElementById("guessed").innerHTML = "";
    document.getElementById("guessLeft").innerHTML = "Guesses Remaining: " + wtfLeft;

}

pcGuessFunction();
