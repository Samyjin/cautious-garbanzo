const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

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

function writeToLog(
    operationIndentifier,
    previousResult,
    operationNumber,
    newResult
) {
    const logEntry = {
        operator: operationIndentifier,
        previousResult: previousResult,
        number: operationNumber,
        result: newResult,
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function add() {
    const enteredNumber = getUserInputAsNumber();
    const prevResult = currentResult;
    currentResult += enteredNumber; // currentResult += +userInput.value; <-- shortcut to parse it as number
    createAndWriteOutput("+", prevResult, enteredNumber);
    writeToLog("+", prevResult, enteredNumber, currentResult);
}

function substract() {
    const enteredNumber = getUserInputAsNumber();
    const prevResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput("-", prevResult, enteredNumber);
    writeToLog("-", prevResult, enteredNumber, currentResult);
}

function multiply() {
    const enteredNumber = getUserInputAsNumber();
    const prevResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput("*", prevResult, enteredNumber);
    writeToLog("*", prevResult, enteredNumber, currentResult);
}

function divide() {
    const enteredNumber = getUserInputAsNumber();
    const prevResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput("/", prevResult, enteredNumber);
    writeToLog("/", prevResult, enteredNumber, currentResult);
}

addBtn.addEventListener("click", add);
divideBtn.addEventListener("click", divide);
subtractBtn.addEventListener("click", substract);
multiplyBtn.addEventListener("click", multiply);