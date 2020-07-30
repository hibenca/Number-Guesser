/* Number Guesser Game */

// Game Value
let min = 1,
    max = 10,
    guessesLeft = 3,
    winningNum = getRandomNum(min, max);

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

// Listen for play again
game.addEventListener("mousedown", function(e) {
    if (e.target.classList.contains('play-again')) {
        window.location.reload();
    }
});

// Listen for guess
guessBtn.addEventListener("click", function () {
    let guess = parseInt(guessInput.value);

    // Validate
    if (isNaN(guess) || guess < min || guess > max) {
        return setMessage(`Please enter a number between ${min} and ${max}`, `red`);
    }
    // Check if won
    if (guess === winningNum) {
        // Game over - won
        gameOver(true, `${winningNum} is correct, YOU WIN!`);

    } else {
        // Wrong number
        guessesLeft -= 1;

        if (guessesLeft === 0) {
            // Game over - lost
            gameOver(false, `Game over, you lost. The correct number was ${winningNum}`);
        } else {
            // Game continues - answer wrong

            // Change border color
            guessInput.style.borderColor = "red";

            // Clear input
            guessInput.value = '';

            // Set message
            setMessage(`Guess wrong, you have ${guessesLeft} guesses left`, `red`);
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
    // Play again
    guessBtn.value = "Play Again";
    guessBtn.className += " play-again";
}

// Get Random Number
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// Set Message
function setMessage(msg, color) {
    results.textContent = msg;
    results.style.color = color;
};