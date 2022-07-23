const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

const ADD_OPERATION = "ADD";
const SUB_OPERATION = "SUB";
const MUL_OPERATION = "MUL";
const DIV_OPERATION = "DIV";

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

const calulateResult = (calculationType) => {
    const enteredNumber = getUserInputAsNumber();
    if (
        calculationType !== ADD_OPERATION &&
        calculationType !== SUB_OPERATION &&
        calculationType !== MUL_OPERATION &&
        calculationType !== DIV_OPERATION ||
        !enteredNumber
    ) {
        return;
    }

    const prevResult = currentResult;
    let mathOperator;
    if (calculationType === ADD_OPERATION) {
        currentResult += enteredNumber; // currentResult += +userInput.value; <-- shortcut to parse it as number
        mathOperator = "+";
    } else if (calculationType === SUB_OPERATION) {
        currentResult -= enteredNumber;
        mathOperator = "-";
    } else if (calculationType === MUL_OPERATION) {
        currentResult *= enteredNumber;
        mathOperator = "*";
    } else if (calculationType === DIV_OPERATION) {
        currentResult /= enteredNumber;
        mathOperator = "/";
    }

    createAndWriteOutput(mathOperator, prevResult, enteredNumber);
    writeToLog(calculationType, prevResult, enteredNumber, currentResult);
}

addBtn.addEventListener("click", calulateResult.bind(this, ADD_OPERATION));
divideBtn.addEventListener("click",calulateResult.bind(this, DIV_OPERATION));
subtractBtn.addEventListener("click",calulateResult.bind(this, SUB_OPERATION));
multiplyBtn.addEventListener("click", calulateResult.bind(this, MUL_OPERATION));

// function add() {
//     calulateResult(ADD_OPERATION);
// }

// function substract()) {
//     calulateResult(SUB_OPERATION);
// }

// function multiply() {
//     calulateResult(MUL_OPERATION);
// }

// function divide() {
//     calulateResult(DIV_OPERATION);
// }
