const numbers = [2, 45, 89, 90, 23, 2, 8, 9, 4, 5, 10, 3];

const filteredNumbers = numbers.filter(num => num > 5);
const objNumbers = numbers.map(num => ({number: num}));
const multiplyResult = numbers.reduce((p, c) => p * c);

console.log(numbers, filteredNumbers, objNumbers, multiplyResult);

const findMax = (...args) => {

    let max = args[0];
    for (const num of args) {
        max = max < num ? num : max;
    }

    return max;
}

const findMinAndMax = (...args) => {

    let max = args[0];
    let min = args[0];

    for (const num of args) {
        max = max < num ? num : max;
        min = min > num ? num : min;
    }

    return [min, max];
}

const [ min, max ] = findMinAndMax(...numbers);
console.log(findMax(...numbers), min, max);

const uniqueValueList = new Set(numbers);

console.log(uniqueValueList);
