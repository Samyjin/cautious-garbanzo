const defaultResult = 0;
let currentResult = defaultResult;
let globalVariable = "toto";

currentResult = ((currentResult + 10) * 3) / 2 - 2 ** 2; // ** ==> Power operator

let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - (2 ** 2)`;

currentResult = add(10, 11);

outputResult(currentResult, calculationDescription);

function add(n1, n2) {
    globalVariable = "Add"; // Don't forget about global variable. Sometimes could be useful.
    return n1 + n2;
}
