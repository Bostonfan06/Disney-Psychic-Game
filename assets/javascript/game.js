var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = [];
var userGuess = null;

var lettertobeGuessed = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log("Wins: " + wins + " Losses: " + losses + " guessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + lettertobeGuessed);

var audio = new Audio('/Users/alexissean/Music/iTunes/iTunes Media/Music/Unknown Artist/Unknown Album/Haunted_Mansion_foyer_organ_extended_loop[Mp3Converter.net].mp3');
    audio.play();

document.onkeyup = function(event){

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    if (guessesSoFar.indexOf(userGuess) < 0 && alphabet.indexOf(userGuess) >= 0)
    {
        guessesSoFar[guessesSoFar.length]=userGuess;

        guessesLeft--;
    }

    if (lettertobeGuessed == userGuess) {
        wins++;
        console.log("Congratulations, You've Escaped!");
        guessesLeft = 10;
        guessesSoFar = [];
        lettertobeGuessed = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log("Wins: " + wins + " Losses: " + losses + " guessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + lettertobeGuessed)
    }

    if (guessesLeft == 0) {
        losses++;
        console.log("You are Trapped!");
        guessesLeft = 10;
        guessesSoFar = [];
        lettertobeGuessed = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log("Wins: " + wins + " Losses: " + losses + " guessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + lettertobeGuessed);
    }

    var html =  "<p><h4>What Letter am I thinking of?</h4></p>" +  "</h4></p>"  + "<p><h4>Guesses Left: " + guessesLeft + "</h4></p>" + "<p><h4>Your guesses so far: " + guessesSoFar + "</h4></p>";
	// place html into the game ID
	document.querySelector("#game").innerHTML = html;

	var html =  "<p><h4>Wins: " + wins + "</h4></p>" + "<p><h4>Losses: " + losses + "</h4></p>" ;

	document.querySelector("#score").innerHTML = html;
}