const defaultResult = 0;
let currentResult = defaultResult;

/* 

This is a block comment 

*/


// Gets input from input field
function getUserInputAsNumber() {
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, numberBeforeCalculation, calcNumber) {
    const descCalculation = `${numberBeforeCalculation} ${operator} ${calcNumber}`;
    outputResult(currentResult, descCalculation); // from vendor file
}

function add() {
    const enteredNumber = getUserInputAsNumber();
    const prevResult = currentResult;
    currentResult += enteredNumber; // currentResult += +userInput.value; <-- shortcut to parse it as number
    createAndWriteOutput("+", prevResult, enteredNumber);
}

function substract() {
    const enteredNumber = getUserInputAsNumber();
    const prevResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput("-", prevResult, enteredNumber);
}

function multiply() {
    const enteredNumber = getUserInputAsNumber();
    const prevResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput("*", prevResult, enteredNumber);
}

function divide() {
    const enteredNumber = getUserInputAsNumber();
    const prevResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput("/", prevResult, enteredNumber);
}

addBtn.addEventListener("click", add);
divideBtn.addEventListener("click", divide);
subtractBtn.addEventListener("click", substract);
multiplyBtn.addEventListener("click", multiply);



