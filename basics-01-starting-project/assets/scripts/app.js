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

function calulateResult(calculationType) {
    const enteredNumber = getUserInputAsNumber();
    if (
        calculationType !== "ADD" &&
        calculationType !== "SUBSTRACT" &&
        calculationType !== "MULTIPLY" &&
        calculationType !== "DIVIDE" ||
        !enteredNumber
    ) {
        return;
    }

    const prevResult = currentResult;
    let mathOperator;
    if (calculationType === "ADD") {
        currentResult += enteredNumber; // currentResult += +userInput.value; <-- shortcut to parse it as number
        mathOperator = "+";
    } else if (calculationType === "SUBSTRACT") {
        currentResult -= enteredNumber;
        mathOperator = "-";
    } else if (calculationType === "MULTIPLY") {
        currentResult *= enteredNumber;
        mathOperator = "*";
    } else if (calculationType === "DIVIDE") {
        currentResult /= enteredNumber;
        mathOperator = "/";
    }

    createAndWriteOutput(mathOperator, prevResult, enteredNumber);
    writeToLog(calculationType, prevResult, enteredNumber, currentResult);
}

function add() {
    calulateResult("ADD");
}

function substract() {
    calulateResult("SUBSTRACT");
}

function multiply() {
    calulateResult("MULTIPLY");
}

function divide() {
    calulateResult("DIVIDE");
}

addBtn.addEventListener("click", add);
divideBtn.addEventListener("click", divide);
subtractBtn.addEventListener("click", substract);
multiplyBtn.addEventListener("click", multiply);
