let randomNumber = Math.floor(Math.random() * 10) + 1;


// Game Value
let min = 1,
    max = 10,
    // Edit?
    guessing = true,
    guessesLeft = 3,
    winningNum = 1;

// UI Elements
const game = document.querySelector('#game'),
    results = document.querySelector('#results'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector("#guess"),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener("click", function () {
    let guess = parseInt(guessInput.value)

    // Validate
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, `red`);
    }
    if (guess === winningNum) {
        // Gme over - won
        gameOver(true, `${winningNum} is correct, YOU WIN!`);

    } else {
        // Wrong number
        guessesLeft -= 1;

        if (guessesLeft === 0) {
            // Game over - lost
        gameOver(false, `Game over, you lost. The correct number was ${winningNum}`)
        } else {
            // Game continues - answer wrong

            // Change border color
            guessInput.style.borderColor = "red";

            // Clear input
            guessInput.valeu = '';

            // Set message
            setMessage(`Guess wrong, you have ${guessesLeft} guesses left`, `red`)

        }

    }

});

// Game over
function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';

    // Disabled input
    guessInput.disabled = true;
    // Change border color
    guessInput.style.borderColor = color;
    // Set text color
    results.style.color = color;
    // Set message
    setMessage(msg)
}



// Set Message
function setMessage(msg, color) {
    results.textContent = msg;
    results.style.color = color;
};



function playingTheGame() {
    if (guessing === false) {
        guessesLeft = 0;
        guessBtn.value = "Submit";
        guess.disabled = false;
        guess.value = "";
        results.innerText = "";
        guessing = true;
        randomNumber = Math.floor(Math.random() * 10) + 1;
    } else {
        compareGuess();
    }
}

// Check if won
function compareGuess() {
    if (+guess.value === randomNumber) {
        // Set message
        results.innerText = randomNumber + " is correct!";
        // Change color
        results.style.color = "green";
        // Disabled input
        guess.disabled = true;
        guessBtn.value = "Play Again"
        guessing = false;
    } else if (guessesLeft === 0) {
        results.innerText = "Try again you have 2 guesses left";
        results.style.color = "red";
        guessesLeft += 1;
    } else if (guessesLeft === 1) {
        results.innerText = "Try again you have 1 guess left";
        results.style.color = "red";
        guessesLeft += 1;
    } else {
        results.innerText = "Game over bro";
        results.style.color = "red";
        guess.disabled = true;
        guessBtn.value = "Try Again"
        guessing = false;
    }
}
