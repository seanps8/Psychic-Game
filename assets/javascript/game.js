//make alphabet array
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

//make wins and losses counters
var wins = 0;
var losses = 0;

//declare a guesses left variable = 9
var guessesLeft = 9;

//declare an empty array for letters already guessed
var lettersGuessed = [];

//if letter is correct,initialize letters guessed and increment wins
//if letter is incorrect, decrement guesses left value
//if guesses left === 0, initialize everything back to normal values, increment losses

var playerWin = function() {
    wins++;
    lettersGuessed = [];
    guessesLeft = 9;
}

var playerLose = function () {
    losses++;
    guessesLeft = 9;
    lettersGuessed = [];
}

document.onkeyup = function(event) {
    var userGuess = event.key;
    var computerChoice = letters[Math.floor(Math.random()) * letters.length];

    if (userGuess === computerChoice) {
        playerWin();
    }
    else {
        lettersGuessed.push(userGuess);
        guessesLeft--;
    }

    if (guessesLeft === 0) {
        playerLose();
    }

    var html = 
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Guesses Left: " + guessesLeft + "</p>" + 
    "<p>Your guesses so far: " + lettersGuessed + "</p>";

    document.querySelector("#game").innerHTML = html;

};



