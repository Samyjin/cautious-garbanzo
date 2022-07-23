const startGameBtn = document.getElementById('start-game-btn');

// function startGame() {
//     console.log("Game is starting...");
// }



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

 * 
 */

startGameBtn.addEventListener("click", function () {
    console.log("Game is starting...");
})