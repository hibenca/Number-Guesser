let randomNumber = Math.floor(Math.random() * 10) + 1;

let guessing = true;
let guesses = 0;

document.getElementById('guess-form').addEventListener("submit", function (e) {
    playingTheGame();
    e.preventDefault();
})


// UI Variables
const guess = document.getElementById('guess');
const result = document.getElementById('results');
const submit = document.getElementById('submit');


function playingTheGame() {
    if (guessing === false) {
        guesses = 0;
        submit.value = "Submit";
        guess.disabled = false;
        guess.value = "";
        result.innerText = "";
        guessing = true;
        randomNumber = Math.floor(Math.random() * 10) + 1;
    } else {
        compareGuess();
    }
}


function compareGuess() {
    if (+guess.value === randomNumber) {
        result.innerText = randomNumber + " is correct!";
        result.style.color = "green";
        guess.disabled = true;
        submit.value = "Play Again"
        guessing = false;
    } else if (guesses === 0) {
        result.innerText = "Try again you have 2 guesses left";
        result.style.color = "red";
        guesses += 1;
    } else if (guesses === 1) {
        result.innerText = "Try again you have 1 guess left";
        result.style.color = "red";
        guesses += 1;
    } else {
        result.innerText = "Game over bro";
        result.style.color = "red";
        guess.disabled = true;
        submit.value = "Try Again"
        guessing = false;
    }
}
