const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_CHOICE = "ROCK";
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WIN = "PLAYER WIN";
const RESULT_COMPUTER_WIN = "COMPUTER WIN";

let gameIsRunning = false;

const getplayerChoise = () => {
    const choice = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`).toUpperCase();
    if (choice !== ROCK && choice !== PAPER && choice !== SCISSORS) {
        alert(`Invalid input ! We chose ${DEFAULT_CHOICE} for you!`);
        return;
    }
    return choice;
};

const getComputerChoice = function () {
    const choice = parseInt((Math.random() * 10) % 3);
    switch (choice) {
        case 0:
            return ROCK;
        case 1:
            return PAPER;
        case 2:
        default:
            return SCISSORS;
    }
};

// One line arrow function omit return and brackets !
// On function parameters, if pChoice is undefined, default value of the parameter is taking
// Order is important, you can use cChoice in pChoice declaration. For example: pChoice = cChoice == "ROCK" ? PAPER : DEFAULT_CHOICE.
const getWinner = (cChoice, pChoice = DEFAULT_CHOICE) =>
    cChoice === pChoice
        ? RESULT_DRAW
        : (cChoice === ROCK && pChoice === PAPER) ||
          (cChoice === PAPER && pChoice === SCISSORS) ||
          (cChoice === SCISSORS && pChoice === ROCK)
        ? RESULT_PLAYER_WIN
        : RESULT_COMPUTER_WIN;

// const getWinner = function (cChoice, pChoice) {
//     if (cChoice === pChoice) {
//         return RESULT_DRAW;
//     } else if (
//         (cChoice === ROCK && pChoice === PAPER) ||
//         (cChoice === PAPER && pChoice === SCISSORS) ||
//         (cChoice === PAPER && pChoice === ROCK)
//     ) {
//         return RESULT_PLAYER_WIN;
//     } else {
//         return RESULT_COMPUTER_WIN;
//     }
// };

startGameBtn.addEventListener("click", () => {
    if (gameIsRunning) return;

    gameIsRunning = true;
    console.log("Game is starting...");
    const playerSelection = getplayerChoise();
    const computerSelection = getComputerChoice();
    const winner = playerSelection
        ? getWinner(computerSelection, playerSelection)
        : getWinner(computerSelection);

    let message = `You picked ${
        playerSelection || DEFAULT_CHOICE
    } and computer picked ${computerSelection} therefore you `;

    if (winner === RESULT_DRAW) message = message + "made a draw.";
    else if (winner === RESULT_PLAYER_WIN) message = message + "win.";
    else message = message + "lost.";

    alert(message);
    gameIsRunning = false;
});

// Not related to the game
// Infinite args for a function.
// REST Operator and arguments keyword

const sumUp = (callBack, ...numbers) => {
    let sum = 0;
    for (num of numbers) {
        sum += num;
    }

    callBack(sum);
};

const displayResult = (number) => {
    alert("The result is " + number);
};

const substractUp = function () {
    let sum = 0;
    for (num of arguments) {
        // not really used. Prefer using rest operator
        sum -= num;
    }

    return sum;
};

sumUp(displayResult, 1, 2, 3);
sumUp(displayResult, 1, 2, 3, 4, 5);
console.log(substractUp(10, 2, 3));

/*
 *
 * For debug purpose, you can give a name to an anonymous function
 * 
 * startGameBtn.addEventListener("click", function () {
    console.log("Game is starting...", age);
    })
 * Uncaught ReferenceError: age is not defined
    ---> <anonymous> http://127.0.0.1:5500/functions-01-starting-code/app.js:17
    EventListener.handleEvent* http://127.0.0.1:5500/functions-01-starting-code/app.js:16

    The error with 
    startGameBtn.addEventListener("click", function startGame() {
    console.log("Game is starting...", age);
    })

    Uncaught ReferenceError: age is not defined
    --> startGame http://127.0.0.1:5500/functions-01-starting-code/app.js:28
    EventListener.handleEvent* http://127.0.0.1:5500/functions-01-starting-code/app.js:27

    This cannot work with arrow function !
 * 
 */
