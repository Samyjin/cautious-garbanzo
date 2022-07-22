const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const randomNumber2 = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if (
    (randomNumber > 0.7 && randomNumber2 > 0.7) ||
    !(randomNumber > 0.2) ||
    !(randomNumber2 > 0.2)
) {
    alert(`Yeah ! That's it ! Number: ${randomNumber} <-> ${randomNumber2}`);
}

const array = [1, 2, 3, 4];
for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
}

for (const number of array) {
    console.log(number);
}
